import Error from "@/app/error";
import { getAuthHeader } from "@/helpers/authHeader";
import React from "react";
import Invoice from "@/components/invoice/Invoice";
export const metadata = {
  title: "Bookings Invoice",
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
  return <Invoice data={data} />;
};

export default BookingDetailsPage;
