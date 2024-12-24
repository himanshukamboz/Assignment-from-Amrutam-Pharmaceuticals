import React, { useState } from "react";
import expertize from "./assets/Expertize.png"
import Concerns from "./Concerns";
import { WomenIcon, facebookIcon, healthIcon, immunityIcon, instagramIcon, skincareIcon, twitterIcon, youtubeIcon } from "./assets/svgs/icons";
const DoctorInfo = () => {
  //Read more functionality
  const [expanded, setexpanded] = useState(false);
  const handleRead = () => {
    setexpanded(!expanded);
  };
  const fulltext =
    "Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni HospitalSurat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the ### university";
  const truncatedtext = fulltext.substring(0, 159);
  
  return (
    <div className="w-1/2  ">
      <div className="w-full border border-[#DCDCDC] h-[375px] rounded-xl overflow-hidden hover:border-blue-150 hover:border-2">
        <div className="w-full h-[15%] bg-custom-gradient flex items-center justify-between px-4">
          <p className="font-nunito text-[#313131] text-[24px] font-medium">
            A Little About Me
          </p>
          <button className="border border-[#3A643B] text-[#585858] bg-white rounded-lg px-2 text-[16px] text-center font-nunito">
            Follow <span className="text-[20px]">+</span>
          </button>
        </div>
        <div className="w-full p-8">
          <div>
            <p className="font-poppins text-[#33354880] text-[14px] ">
              {expanded ? fulltext : truncatedtext + "..."}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="border-[0.5px] border-[#797979] w-10/12"></div>
            <p
              className="font-poppins text-[#2B2B2B] text-[12px] underline font-medium cursor-pointer"
              onClick={handleRead}
            >
              {expanded ? "Read Less" : "Read More"}
            </p>
          </div>
          <div className="flex mt-7 items-center space-x-3">
            <p className="font-nunito text-sm font-medium">Language Spoken</p>
            <span className="font-nunito text-[#505050] text-sm bg-[#2E37A40A] p-1 px-4 rounded-xl">
              English
            </span>
            <span className="font-nunito text-[#505050] text-sm bg-[#2E37A40A] p-1 px-4 rounded-xl">
              Hindi
            </span>
            <span className="font-nunito text-[#505050] text-sm bg-[#2E37A40A] p-1 px-4 rounded-xl">
              Tamil
            </span>
          </div>
          <div className="mt-7 flex gap-x-3">
            <a href=" https://www.facebook.com/">
              {facebookIcon}
            </a>
            <a href="https://instagram.com">
             {instagramIcon}
            </a>
            <a href="https://www.youtube.com">
              {youtubeIcon}
            </a>
            <a href="https://www.twitter.com">
              {twitterIcon}
            </a>
          </div>
        </div>
      </div>
      {/*Concerns I Treat----------------------------------------> */}
      <div className="w-full border border-[#DCDCDC] h-52 rounded-xl overflow-hidden hover:border-blue-150 hover:border-2 mt-8">
        <div className="w-full h-[25%] bg-custom-gradient flex items-center justify-between px-4">
          <p className="font-nunito text-[#313131] text-[24px] font-medium">
            I Specialize In
          </p>
        </div>
        <div className="flex justify-center py-4 gap-2 text-sm">
          <div>
            {WomenIcon}
            <p className="font-nunito text-medium mt-1 text-center">Women Health</p>
          </div>
          <div>
            {skincareIcon}
            <p className="font-nunito text-medium mt-1 text-center">Skin Care</p>
          </div>
          <div>
            {immunityIcon}
            <p className="font-nunito text-medium mt-1 text-center">Immunity</p>
          </div>
          <div>
            {healthIcon}
            <p className="font-nunito text-medium mt-1 text-center">Health Care</p>
          </div>
        </div>
      </div>
      <Concerns/>
    </div>
  );
};

export default DoctorInfo;