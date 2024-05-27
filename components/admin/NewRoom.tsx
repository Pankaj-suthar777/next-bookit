"use client";
import { useNewRoomMutation } from "@/redux/api/roomApi";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";

const NewRoom = () => {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    price: 0,
    description: "",
    category: "King",
    guestCapacity: 1,
    numOfBeds: 1,
    internet: false,
    breakfast: false,
    airConditioned: false,
    petsAllowed: false,
    roomCleaning: false,
    address: "",
  });

  const {
    airConditioned,
    breakfast,
    category,
    description,
    guestCapacity,
    internet,
    name,
    numOfBeds,
    petsAllowed,
    price,
    roomCleaning,
    address,
  } = roomDetails;

  const router = useRouter();

  const [newRoom, { isLoading, error, isSuccess }] = useNewRoomMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      router.push("/admin/rooms");
      toast.success("Room created");
    }
  }, [error, isSuccess]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const roomData = {
      isAirConditioned: airConditioned,
      isBreakfast: breakfast,
      category,
      description,
      guestCapacity: Number(guestCapacity),
      isInternet: internet,
      name,
      numOfBeds: Number(numOfBeds),
      isPetsAllowed: petsAllowed,
      pricePerNight: price,
      roomCleaning,
      address,
    };
    newRoom(roomData);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]:
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value,
    });
  };

  const roomsFeatures: { name: string; value: keyof typeof roomDetails }[] = [
    { name: "Internet", value: "internet" },
    { name: "Breakfast", value: "breakfast" },
    { name: "Air Conditioned", value: "airConditioned" },
    { name: "Pets Allowed", value: "petsAllowed" },
    { name: "Room Cleaning", value: "roomCleaning" },
  ];

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-8">
        <form
          className="shadow rounded bg-body"
          onSubmit={submitHandler}
          encType="mutipart/form-data"
        >
          <h2 className="mb-4">New Room</h2>
          <div className="mb-3">
            <label htmlFor="name_field" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price_field" className="form-label">
              Price
            </label>
            <input
              type="text"
              id="price_field"
              className="form-control"
              name="price"
              value={price}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description_field" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description_field"
              rows={8}
              name="description"
              required
              defaultValue={""}
              value={description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address_field" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address_field"
              className="form-control"
              name="address"
              value={address}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="room_type_field" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="room_type_field"
              name="category"
              value={category}
              onChange={onChange}
            >
              {["King", "Single", "Twins"].map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="guest_field" className="form-label">
                Guest Capacity
              </label>
              <select
                className="form-select"
                id="guest_field"
                name="guestCapacity"
                value={guestCapacity}
                onChange={onChange}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 col">
              <label htmlFor="numofbeds_field" className="form-label">
                Number of Beds
              </label>
              <select
                className="form-select"
                id="numofbeds_field"
                name="numOfBeds"
                value={numOfBeds}
                onChange={onChange}
              >
                {[1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <label className="mb-3">Room Features</label>

          {roomsFeatures.map((feture) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name={feture.value}
                id={feture.name}
                onChange={onChange}
                checked={!!roomDetails[feture.value]}
              />
              <label className="form-check-label" htmlFor={feture.name}>
                {feture.name}
              </label>
            </div>
          ))}

          {/* Add more features here */}
          <button
            type="submit"
            className="btn form-btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? <ButtonLoader /> : "CREATE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRoom;
