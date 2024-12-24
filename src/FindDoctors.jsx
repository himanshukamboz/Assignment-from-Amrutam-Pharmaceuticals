import React, { useState } from "react";
import {
  dropDownIcon,
  ellipseDownIcon,
  ellipseIcon,
  goIcon,
  loctationIcon,
} from "./assets/svgs/icons";
import DesiredDoctor from "./DesiredDoctor";
import Allfilters from "./Allfilters";
import Tags from "./Tags";
import DoctorProfileCard from "./DoctorProfileCard";


const FindDoctors = () => {
  // To set tags

  const [tags,settags]=useState([]);
  // Filter dropdown items

  const allfilters = ["Expertise", "Gender", "Fees", "Languages"];
  const dropdowns = [
    { id: 1, options: ["Gynecology","Pediatrics","Cardiology","Orthopedics","Hair Care"] ,name:"Expertise"},
    { id: 2, options: ["Male", "Female", "None"] , name:'Gender' },
    { id: 3, options: ["Rs.0-Rs.500", "Rs.500-Rs.1000", "Rs.1000-Rs.1500", "Rs.1500-Rs.2000"] , name:"Fees" },
    { id: 4, options: ["Hindi", "English", "Tamil", "Punjabi"], name:"Languages" },
  ];
  // Dropdown icon rotation state

  const [selectedOption, setSelectedOption] = useState("");
  const [isDropOpen, setIsDropOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropOpen(!isDropOpen);
  };
  const handleSelectedOption = (event) => {
    setSelectedOption(event.target.value);
    setIsDropOpen(false);
  };
  
  return (
    <>
      {/*Find Location and Search portion-----------------------*/}
      <div className="w-full bg-[#EAF2EA] min-h-56 overflow-hidden relative flex justify-center items-center">
        <div className="absolute top-0 left-20">{ellipseIcon}</div>
        <div className="absolute top-0 right-20">{ellipseIcon}</div>
        <div className="absolute bottom-0 left-44">{ellipseDownIcon}</div>
        <div className="absolute bottom-0 right-40">{ellipseDownIcon}</div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <p className="text-center text-3xl font-poppins z-10">
            Find expert Doctors for an In-clinic session here{" "}
          </p>

          <div className="flex items-center gap-x-2">
            {/*Dropdown Menu --------------------------*/}
            <div className="flex relative items-center cursor-pointer w-[185px]">
              <div className=" z-20 absolute left-4 top-3.5">
                {loctationIcon}
              </div>
              <select
                className="cursor-pointer bg-white text-[#767676] text-sm font-inter border border-gray-300 z-10 rounded-lg pl-10 pr-10 py-[14.2px] focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none "
                onMouseDown={toggleDropdown}
                onBlur={() => setIsDropOpen(false)}
                onChange={handleSelectedOption}
              >
                <option hidden  value="">
                  Select Location
                </option>
                <option className="rounded-xl" value="option1">
                  Karnal
                </option>
                <option className="rounded-xl" value="option2">
                  Ambala
                </option>
                <option className="rounded-xl" value="option3">
                  Panipat
                </option>
              </select>
              <div
                className={`z-20 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-150 ${
                  isDropOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {dropDownIcon}
              </div>
            </div>
            {/*Search Bar ------------------------------*/}
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="rounded-lg h-9 outline-0 px-4 font-inter caret-gray-600 text-green-700 text-sm w-[420px] z-20 border border-[#CDCDCD] cursor-pointer focus:ring-1 focus:ring-blue-500 py-6"
              />
              <div className="absolute z-20 right-2 cursor-pointer">
                {goIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Filters ------------------------------------->*/}
      <div className="flex justify-center items-center py-4 border border-[#EDEDED]">
        {dropdowns.map((item,index)=>(<DesiredDoctor name={item.name} options={item.options} key={item.id} settags={settags} tags={tags} dropdowns={dropdowns} id={item.id}/>))}
        <Allfilters name={"All Filters"} options={allfilters}   />
      </div>
      <div className="mt-9 w-full px-[10%]">
       {/*Tags ------------------------------------->*/}
      <div className="flex justify-end items-center ">
        <Tags tags={tags} settags={settags}/>
      </div>
      {/*Doctors profile cards--------------------------->*/}
      <div className="flex items-center justify-center mt-8 gap-7">
        <DoctorProfileCard/>
        <DoctorProfileCard/>
        <DoctorProfileCard/>
      </div>
      </div>
    </>
  );
};

export default FindDoctors;
