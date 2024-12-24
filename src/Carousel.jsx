import React, { useRef } from "react";
import { leftbtnIcon, rightbtnIcon } from "./assets/svgs/icons";
import { useState } from "react";

const Carousel = () => {
  // to get updated date of next seven days
  const getdayswithDate = (startDate = new Date()) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const result = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const day = days[date.getDay()];
      const formattedDate = `${date.getDate()} ${months[date.getMonth()]}`;
      if (day !== "Sun") {
        result.push({ day, date: formattedDate });
      }
    }
    return result;
  };
  const [isSelected, setisSelected] = useState(null);
  const handleselect = (index) => {
    isSelected === index ? setisSelected(null) : setisSelected(index);
  };
  // Create a ref for the carousel container
  const carouselRef = useRef(null);
  // call the function dayswithDate
  const dayswithDate = getdayswithDate();
  // Add slots and color in dayswithDate
  const slot = [
    { slot: 10, color: "#FFA500" },
    { slot: 2, color: "#D5512E" },
    { slot: 5, color: "#F1B93A" },
    { slot: 4, color: "#FF7F7F" },
    { slot: 8, color: "gray" },
    { slot: 9, color: "green" },
  ];
  const dayswithSlot = dayswithDate.map((item, index) => {
    return { ...item, ...slot[index] };
  });

  // Function to scroll the carousel to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -150, // Adjust the value as needed for scroll speed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the carousel to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 150, // Adjust the value as needed for scroll speed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-3 gap-x-2">
      {/* Left Button */}
      <button onClick={scrollLeft} className="p-2">
        {leftbtnIcon}
      </button>

      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex w-10/12 flex-nowrap overflow-scroll custom-scroll gap-2"
      >
        {/* Carousel items */}
        {dayswithSlot.map((e, index) => {
          return isSelected === index ? (
            <div
              key={index}
              className="border border-[#bb5353] p-2 px-1 rounded-xl min-w-32 cursor-pointer bg-[#F2FBF2] hover:border-1.5 hover:border-[#3A643B] "
              onClick={() => handleselect(index)}
            >
              <div className="text-center font-inter text-[#3A643B] text-sm">
                {e.day}, {e.date}
              </div>
              <p className="text-center font-inter text-sm text-[#818181]">
                {e.slot.toString().padStart('2',0)} slots
              </p>
            </div>
          ) : (
            <div
              key={index}
              className="border border-[#E2E2E2] p-2 px-1 rounded-xl min-w-32 cursor-pointer hover:border-1.5 hover:border-[#3A643B] "
              onClick={() => handleselect(index)}
            >
              <div className="text-center font-inter text-[#131313] text-sm">
                {e.day}, {e.date}
              </div>
              <p
                className="text-center font-inter text-sm"
                style={{ color: e.color }}
              >
                {e.slot.toString().padStart('2',0)} slots
              </p>
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button onClick={scrollRight} className="p-2">
        {rightbtnIcon}
      </button>
    </div>
  );
};

export default Carousel;
