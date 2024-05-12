"use client";
import { IRoom } from "@/backend/models/room";
import React, { useEffect } from "react";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "./RoomImageSlider";
import RoomFeatures from "./RoomFeatures";
import BookingDatePicker from "./BookingDatePicker";
import NewReview from "../review/NewReview";
import ListReviews from "../review/ListReviews";
// i don't have api key
//import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
//import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  data: {
    room: IRoom;
  };
}
//  i don't have api key
// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  // i don't have api key
  // useEffect(() => {
  //   const setMap = () => {
  //     const coordinates = room?.location.coordinates;

  //     const map = new mapboxgl({
  //       conatiner: "job-map",
  //       style: "mapbox://styles/mapbox.streets-v11",
  //       center: coordinates,
  //       zoom: 12,
  //     });

  //     // Add marker to the map
  //     new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  //   };
  //   setMap();
  // }, []);

  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room.name}</h2>
      <p>{room.address}</p>
      <div className="ratings mt-auto mb-3">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          name="rating"
          starDimension={"18px"}
          starSpacing="1px"
        />
        <span className="no-of-reviews">({room?.numOfReviews} Reviews)</span>
      </div>
      <RoomImageSlider images={room?.images} />
      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{room?.description}</p>
          <RoomFeatures room={room} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />

          {/* i don't have api key */}
          {/* {room?.location && (
            <div className="my-5">
              <h4 className="my2">Room Location:</h4>
              <div
                id="room-map"
                className="shadow rounded"
                style={{ height: 350, width: "100%" }}
              ></div>
            </div>
          )} */}
        </div>
      </div>
      <NewReview />
      <ListReviews />
    </div>
  );
};

export default RoomDetails;
