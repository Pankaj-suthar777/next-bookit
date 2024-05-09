import React from "react";
import { IRoom } from "@/backend/models/room";
import RoomItem from "./room/RoomItem";
import CustomPagination from "./layout/CustomPagination";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomCount: number;
    rooms: IRoom[];
  };
}
const Home = ({ data }: Props) => {
  const { rooms, filteredRoomCount, resPerPage } = data;
  return (
    <div>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
        <a href="/search" className="ml-2 back-to-search">
          <i className="fa fa-arrow-left" /> Back to Search
        </a>
        <div className="row mt-4">
          {rooms.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms</b>
            </div>
          ) : (
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>
      <CustomPagination
        filteredRoomCount={filteredRoomCount}
        resPerPage={resPerPage}
      />
    </div>
  );
};

export default Home;
