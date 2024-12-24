import React, { useState } from "react";
import { calenderIcon, selected } from "./assets/svgs/icons";
import Carousel from "./Carousel"
import TimeSelector from "./TimeSelector";
const AppointmentInfo = () => {
  const conversationMode = [
    { mode: "In-Clinic", time: "45 Mins" },
    { mode: "Video", time: "45 Mins" },
    { mode: "Chat", time: "10 Mins" },
  ];
  const morningTiming = ["09:00","09:30","10:00","10:15","10:45","11:00"]
  const eveningTiming = ["4:00","4:15","4:30","4:45","5:15"]
  const [isSelected, setisSelected] = useState(null);
  const handleselect = (index) => {
    isSelected === index ? setisSelected(null) : setisSelected(index);
  };
  const [selectedTime,setselectedTime]=useState("");
  return (
    <>
      {/*Appointment Info-------------------*/}
      <div className="w-1/2">
        <div className="w-full border border-[#DCDCDC] min-h-lvh rounded-xl py-6 px-4 overflow-hidden hover:border-blue-150 hover:border-2">
          {/*Appointment fees card----------------*/}
          <div className="border border-[#E2E2E2] w-full flex justify-between items-center px-3 py-2 rounded-xl">
            <p className="font-nunito text-[20px] font-medium">
              Appointment Fee
            </p>
            <p className="font-nunito text-[20px] font-medium text-[#3A643B]">₹699.00</p>
          </div>

          {/*Select Mode Part---------------------*/}
          <div className="p-2 flex w-full items-center my-4 gap-x-2">
            <p className="font-semibold text-xl font-nunito">Select your mode of session</p>
            <div className="border border-[#D4D4D4] flex-grow mt-1"></div>
          </div>

          <div className="flex gap-x-3">
            {conversationMode.map((e, index) => {
              return isSelected === index ? (
                <div
                  className="border border-[#E5E5E5]  rounded-lg w-1/3 py-2 bg-[#F2FBF2] hover:border-[2.5px] hover:border-[#39693a85] cursor-pointer"
                  onClick={() => handleselect(index)}
                  key={index}
                >
                  <div className="flex gap-x-1 justify-center items-center">
                    <p className=" text-[#3A643B]  font-poppins font-medium">
                      {e.mode}
                    </p>
                    {selected}
                  </div>
                  <p className="text-center font-poppins text-[#606060] text-sm">
                    {e.time}
                  </p>
                </div>
              ) : (
                <div
                  className="border border-[#E5E5E5]  rounded-lg w-1/3 py-2 hover:border-[2.5px] hover:border-[#39693a85] cursor-pointer"
                  onClick={() => handleselect(index)}
                  key={index}
                >
                  <p className="text-center text-[#1F1F1F] text-sm font-poppins font-medium">
                    {e.mode}
                  </p>
                  <p className="text-center font-poppins text-[#606060] text-sm">
                    {e.time}
                  </p>
                </div>
              );
            })}
          </div>
          {/*Pick Time Slot---------------------*/}
          <div className="p-2 flex w-full items-center my-4 gap-x-2">
            <p className="font-semibold text-xl font-nunito">Pick a Time slot</p>
            <div className="border border-[#D4D4D4] flex-grow mt-1"></div>
            {calenderIcon}
          </div>
          {/*Carousel---------------------------------------*/}
          <div className=" border border-[#E1E1E1] rounded-xl w-full h-[120px] px-6 py-4">
              <Carousel/>
          </div>
          {/*Select Time-------------------------------------*/}
          <div className="mt-4 p-2 w-full">
            <p className="font-nunito text-xl font-semibold">Morning</p>
            <TimeSelector timings={morningTiming} ismorning={true} selectedTime={selectedTime} setselectedTime={setselectedTime}/>
          </div>
          <div className="mt-4 p-2 w-full">
            <p className="font-nunito text-xl font-semibold">Evening</p>
            <TimeSelector timings={eveningTiming} ismorning={false} selectedTime={selectedTime} setselectedTime={setselectedTime}/>
          </div>
          {/*Book an Appointment Button-----------------------*/}
          <div className="mt-4 p-2 w-[95%] bg-[#3A643B] text-white text-center rounded-lg font-inter text-lg mx-2 cursor-pointer"> Make an appointment</div>
        </div>
      </div>
    </>
  );
};

export default AppointmentInfo;
