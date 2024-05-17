import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import React from "react";
import BookingDetails from "../../../components/booking/BookingDetails";
export const metadata = {
  title: "My Bookings Details",
};

const getBookings = async (id: string) => {
  const authHeader = getAuthHeader();
  const res = await fetch(
    `${process.env.API_URL}/api/bookings/${id}`,
    authHeader
  );
  return res.json();
};
const BookingDetailsPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getBookings(params.id);
  if (data?.errMessage) {
    return <Error error={data} />;
  }
  return <BookingDetails data={data} />;
};

export default BookingDetailsPage;
