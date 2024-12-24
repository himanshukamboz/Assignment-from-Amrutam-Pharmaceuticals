import React from "react";
import bgimg from "./assets/bgimage.png";
import profilepic from "./assets/assignment image.png";
import { useState } from "react";

const Intro = () => {
  const rating = 4.2; // Assuming the rating is a decimal
  const totalStars = 5; // Total number of stars to show

  // Create an array of stars based on the rating
  const stars = Array.from({ length: totalStars }, (_, index) => {
    // Determine if this star should be filled or empty
    return index < Math.floor(rating)
      ? "filled"
      : "empty";
  });

  return (
    <div >
      <img
        src={bgimg}
        alt="bgimage"
        className="h-32 w-[100%] object-cover rounded-t-lg"
      />
      <div className="h-32 border border-[#D8D8D8] flex relative">
        <div className="absolute bottom-4 mx-4">
          <img
            src={profilepic}
            alt="profile"
            className="border-4 border-white w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="ml-40 mt-4 w-1/5">
          <div className="flex items-center space-x-2 text-[20px] ">
            <p className="font-medium font-poppins">Dr. Bruce Wills</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L17.0711 2.92893L20 10L17.0711 17.0711L10 20L2.92893 17.0711L0 10L2.92893 2.92893L10 0Z"
                fill="#2E37A4"
              />
              <path
                d="M14.6654 7.25L8.2487 13.2083L5.33203 10.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-medium text-[16px] text-[#3A643B] font-poppins">
            Gynecologist
          </p>
          <div className="flex gap-1 my-1">
            <p className="font-poppins text-[#626262]">{rating.toFixed(1)}</p>
            <div className="flex">
            {stars.map((star, index) => {
              // Render the filled star
              if (star === "filled") {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#F79624"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                );
              }
              // Render the empty star
              else {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D8D8D8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                );
              }
            })}
            </div>
          </div>
        </div>
        <div className="flex  ml-10 items-center font-poppins w-1/4 justify-between">
            <div>
              <p className="text-[#3A643B] text-[14px]">Followers</p>
              <h2 className="text-center text-[20px] font-semibold">850</h2>
            </div>
            <div>
            <p className="text-[#3A643B] text-[14px]">Following</p>
              <h2 className="text-center text-[20px] font-semibold">18k</h2>
            </div>
            <div>
              <p className="text-[#3A643B] text-[14px]">Posts</p>
              <h2 className="text-center text-[20px] font-semibold">250</h2></div>
        </div>
        <div className="flex items-center w-1/3 justify-center">
          <button className="font-inter bg-[#3A643B] text-[#FFFFFF] p-2 px-4 rounded-lg text-[20px] ml-10">Book An Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
