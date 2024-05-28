"use client";
import { IBooking } from "@/backend/models/booking";
import Link from "next/link";
import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useDeleteBookingMutation } from "@/redux/api/bookingApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    bookings: IBooking[];
  };
}

const AllBookings = ({ data }: Props) => {
  const bookings = data.bookings;

  const setBookings = () => {
    const data: { columns: any[]; rows: any[] } = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Check In",
          field: "checkin",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    bookings?.forEach((booking) => {
      data?.rows?.push({
        id: booking._id,
        checkin: new Date(booking?.checkInDate).toLocaleString("en-US"),
        actions: (
          <>
            <Link href={`/bookings/${booking._id}`} className="btn btn-primary">
              <i className="fa fa-eye"></i>
            </Link>
            <Link
              href={`/bookings/invoice/${booking._id}`}
              className="btn btn-success ms-2"
            >
              <i className="fa fa-receipt"></i>
            </Link>
            <button
              className="btn btn-outline-danger mx-2"
              disabled={isLoading}
              onClick={() => deleteBookingHandler(booking._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      });
    });

    return data;
  };

  const router = useRouter();

  const [deleteBookings, { isLoading, isSuccess, error }] =
    useDeleteBookingMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.refresh();
      toast.success("Booking deleted");
    }
  }, [error, isSuccess]);

  const deleteBookingHandler = (id: string) => {
    deleteBookings(id);
  };

  return (
    <div className="container">
      <h1 className="my-5">{bookings.length} Bookings</h1>
      <MDBDataTable
        data={setBookings()}
        className="px-3"
        bordered
        striped
        hover
      />
    </div>
  );
};

export default AllBookings;
