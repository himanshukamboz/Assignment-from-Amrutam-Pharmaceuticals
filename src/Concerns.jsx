import React, { useState } from "react";

import { fiveStars, hospitalIcon } from "./assets/svgs/icons";
import ReviewPic from "./assets/ReviewPic.jpeg"

const Concerns = () => {
  //InitialConcerns to show by default
  const initialConcerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
  ]; 

  //Additional concerns to show after click 5 more
  const additionalConcerns = [
    "Infertility Issues",
    "UTI Symptoms",
    "Breastfeeding Tips",
    "Hormonal Imbalance",
    "Menopause Guidance",
  ]; 
  const [concerns, setconcerns] = useState(initialConcerns);
  //to show 5 more cards
  const [show, setshow] = useState(true);
  //function to add additional concerns 
  const handleShow = () => {
    if (!show) {
      setconcerns(initialConcerns);
    } else {
      setconcerns([...initialConcerns, ...additionalConcerns]);
    }
    setshow(!show);
  };
  return (
    <>
      {/*Concerns-Card-------------------------------------->*/}

      <div className="w-full border border-[#DCDCDC] min-h-40 rounded-xl overflow-hidden hover:border-blue-150 hover:border-2 mt-8">
        {/* Concerns card heading */}
        <div className="w-full h-[50px] bg-custom-gradient flex items-center justify-between px-4">
          <p className="font-nunito text-[#313131] text-[24px] font-medium">
            The Concerns I Treat
          </p>
        </div>
        <div className="flex py-4 px-6 flex-wrap gap-x-1 gap-y-3">
          {concerns.map((concern, index) => (
            <span
              key={index}
              className="bg-[#F7F7FC] rounded-xl p-1 px-3 font-nunito text-sm font-medium text-[#3A643B]"
            >
              {concern}
            </span>
          ))}
          {//If show true then show this div
          show && (
            <span
              className="bg-white border border-[#E0DFDF] rounded-xl p-1 px-3 font-nunito text-sm font-medium text-[#3A643B] cursor-pointer"
              onClick={handleShow}
            >
              + 5 More
            </span>
          )}
        </div>
      </div>

      {/*Experience Card--------------------------------------------------->*/}

      <div className="w-full border border-[#DCDCDC] min-h-40 rounded-xl overflow-hidden hover:border-blue-150 hover:border-2 mt-8">
        {/*Experience card heading */}
        <div className="w-full h-[50px] bg-custom-gradient flex items-center justify-between px-4">
          <p className="font-nunito text-[#313131] text-[24px] font-medium">
            My Work Experience
          </p>
        </div>
        <div className="py-4 px-8">
          <p className="font-poppins font-medium text-[#3A643B]">
            {"I have been in practice for : 7+ Years".toUpperCase()}
          </p>
          <div className="border border-[#D1D5D1] mt-4 w-10/12"></div>
          <div className="mt-4 flex items-center gap-x-2">
            {hospitalIcon}

            <div className="w-full">
              <div className="flex justify-between items-center ">
                <div className="font-poppins text-[#333548] font-medium text-sm">
                  Midtown Medical Clinic
                </div>
                <div className="font-poppins text-[#333548B5] text-xs">
                  2016-PRESENT
                </div>
              </div>
              <p className="text-[#33354880] font-poppins font-medium text-sm">
              Senior doctor
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-x-2">
            {hospitalIcon}

            <div className="w-full">
              <div className="flex justify-between items-center ">
                <div className="font-poppins text-[#333548] font-medium text-sm">
                  Midtown Medical Clinic
                </div>
                <div className="font-poppins text-[#333548B5] text-xs mr-[22px]">
                  2010-2015
                </div>
              </div>
              <p className="text-[#33354880] font-poppins font-medium text-sm">
              Senior doctor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Featured Reviews-------------------------------------------------->*/}

      <div className="w-full border border-[#DCDCDC] min-h-40 rounded-xl overflow-hidden hover:border-blue-150 hover:border-2 mt-8">
        <div className="w-full h-[50px] bg-custom-gradient flex items-center justify-between px-4">
          <p className="font-nunito text-[#313131] text-[24px] font-medium">
            Featured Reviews (102)
          </p>
        </div>
        <div className="py-4 px-7 w-full">
          <div className="bg-[#FAFAFA] rounded-xl min-h-32 py-3 px-6">
            {/*Reviewer Profile Section------------------------------------------------->*/}
            <div className="flex items-center justify-between">                           
              <div className="flex items-center gap-2">
                <img src={ReviewPic} alt="reviwerPic " className="w-[54px] h-[56px] object-cover rounded-full" />
                <div>
                  <p className="font-nunito text-[#2F2F2F] text-lg font-medium">Alicent Hightower</p>
                  <p className="font-nunito text-[#939393] text-sm font-normal">Consulted for Skin care</p>
                </div>
              </div>
              <div className="text-[#979797] text-sm font-nunito font-normal">19 Dec 2024</div>
            </div>
            {/*review comment section--------------------------------------------------->*/}
             <div className="mt-4">                                                                         
                {fiveStars}
                <p className="font-nunito text-[#2E2F2E] mt-2 text-sm">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>                                                           
          </div>
          <div className="bg-[#FAFAFA] rounded-xl min-h-32 py-3 px-6 mt-4">
            {/*Reviewer Profile Section------------------------------------>*/}
            <div className="flex items-center justify-between">                           
              <div className="flex items-center gap-2">
                <img src={ReviewPic} alt="reviwerPic " className="w-[54px] h-[56px] object-cover rounded-full" />
                <div>
                  <p className="font-nunito text-[#2F2F2F] text-lg font-medium">Alicent Hightower</p>
                  <p className="font-nunito text-[#939393] text-sm font-normal">Consulted for Skin care</p>
                </div>
              </div>
              <div className="text-[#979797] text-sm font-nunito font-normal">19 Dec 2024</div>
            </div>
             {/*review comment section-------------------------------------->*/}
             <div className="mt-4">                                                                        
                {fiveStars}
                <p className="font-nunito text-[#2E2F2E] mt-2 text-sm">Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
            </div>                                                           
          </div>

        </div>
        </div>
    </>
  );
};

export default Concerns;
