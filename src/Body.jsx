import React from "react";
import Intro from "./Intro";
import DoctorInfo from "./DoctorInfo";
import AppointmentInfo from "./AppointmentInfo";


const Body = () => {
  return (
    <div className="w-screen p-10 px-[12%]">
      <Intro />
      <div className="flex gap-x-4 my-4">
        <DoctorInfo />
        <AppointmentInfo />
      </div>
    </div>
  );
};

export default Body;
