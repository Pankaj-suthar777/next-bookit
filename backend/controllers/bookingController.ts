import { NextRequest, NextResponse } from "next/server";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import Booking, { IBooking } from "../models/booking";
import Moment from "moment";
import { extendMoment } from "moment-range";
import ErrorHandler from "../utils/errorHandler";
import Room from "../models/room";

//@ts-ignore
const moment = extendMoment(Moment);

// Create new Booking   =>  /api/bookings
export const newBooking = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();

  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = body;

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  });

  return NextResponse.json({
    booking,
  });
});

// Check Room Booking Availability   =>  /api/bookings/check
export const checkRoomBookingAvailability = catchAsyncErrors(
  async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const roomId = searchParams.get("roomId");

    const checkInDate: Date = new Date(
      searchParams.get("checkInDate") as string
    );
    const checkOutDate: Date = new Date(
      searchParams.get("checkOutDate") as string
    );

    const bookings: IBooking[] = await Booking.find({
      room: roomId,
      $and: [
        { checkInDate: { $lte: checkOutDate } },
        { checkOutDate: { $gte: checkInDate } },
      ],
    });

    const isAvailable: boolean = bookings.length === 0;

    return NextResponse.json({
      isAvailable,
    });
  }
);

// Get room booked dates   =>  /api/bookings/get_booked_dates
export const getRoomBookedDates = catchAsyncErrors(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const roomId = searchParams.get("roomId");

  const bookings = await Booking.find({ room: roomId });

  const bookedDates = bookings.flatMap((booking) =>
    Array.from(
      moment //@ts-ignore
        .range(moment(booking.checkInDate), moment(booking.checkOutDate))
        .by("day")
    )
  );
  console.log("bookedDates", bookedDates);

  return NextResponse.json({
    bookedDates,
  });
});

// Get current user bookings   =>  /api/bookings/me
export const myBookings = catchAsyncErrors(async (req: NextRequest) => {
  const bookings = await Booking.find({ user: req.user._id });

  return NextResponse.json({
    bookings,
  });
});

// Get booking details   =>  /api/bookings/:id
export const getBookingDetails = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const bookings = await Booking.findById(params.id).populate("user");
    const roomDetails = await Room.findById(bookings.room);
    bookings.room = roomDetails;
    if (bookings.user?._id?.toString() !== req.user._id) {
      throw new ErrorHandler("You can not view this booking", 403);
    }

    return NextResponse.json({
      bookings,
    });
  }
);
