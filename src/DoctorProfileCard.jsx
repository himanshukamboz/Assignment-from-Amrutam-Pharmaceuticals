import doctorcardprofilepic from "./assets/doctorcardprofilepic.png";
import comment from "./assets/comment.png";
import {
  experienceIcon,
  medicineIcon,
  ratingStarIcon,
} from "./assets/svgs/icons";

const DoctorProfileCard = () => {
  return (
    <>
      {/*Doctor profile Card----------------------------------------->*/}

      <div className="w-[315px] bg-[#E3E3E3] rounded-2xl">
        {/*Card content div--------------------------------------------> */}

        <div className="p-3 py-5 w-full">
          {/*Picture and Rating div ------------------------>*/}
          <div className="flex justify-center w-full">
            <div className="relative w-[149px] h-[154px]">
              <img
                src={doctorcardprofilepic}
                alt="doctorcardprofilepic"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="flex items-center justify-center absolute left-[28%] bottom-0 rounded-xl bg-black w-[70px] h-[28px] gap-x-1 text-white text-sm font-poppins font-semibold">
                <span className="leading-none">4.5</span>
                <span className="w-4 h-5 ">{ratingStarIcon}</span>
              </div>
            </div>
          </div>
          {/*Info Section of Card ---------------------------------> */}
          <div className="p-4 pl-6 ">
            <h1 className="font-nunito text-3xl font-semibold">
              Dr. Prerna Narang
            </h1>
            <div className="pl-3 flex flex-col gap-1 ">
              <div className="flex items-center gap-x-2 font-nunito ">
                {medicineIcon}
                <span className="text-[#646665] text-sm">
                  Male-Female Infertility
                </span>
              </div>
              <div className="flex items-center gap-x-1 font-nunito font-medium">
                {experienceIcon}
                <span className="text-[#646665] text-sm">
                  7 years of Experience
                </span>
              </div>
              <div className="flex items-center gap-x-1.5 font-nunito  ">
                <img
                  src={comment}
                  alt="comment"
                  className="w-[18px] h-[16px]"
                />
                <span className="text-[#646665] text-sm">
                  Speaks: English, Hindi, Marathi
                </span>
              </div>
            </div>
            <div className="flex mt-3 px-1 gap-1.5">
              <div className=" flex flex-col justify-center items-center text-xs font-medium gap-1 border border-[#3A643B63] rounded-xl px-1 py-2">
                <span className="text-[#3C3C3C]">Video Consultation</span>
                <span className="text-[#3A643B]">₹800</span>
              </div>
              <div className=" flex flex-col justify-center items-center text-xs font-medium gap-1 border border-[#3A643B63] rounded-xl px-1 py-2">
                <span className="text-[#3C3C3C]">Chat Consultation</span>
                <span className="text-[#3A643B]">Free</span>
              </div>
            </div>
          </div>
          {/*Card Buttons div -------------------------------------> */}
          <div className="px-7 w-full font-nunito font-medium ">
            <div className="border border-[#3A643B] text-center p-2 rounded-lg text-[#3A643B]">View Profile</div>
            <div className="bg-[#3A643B] text-center text-white p-3 rounded-lg mt-2">Book a consultation</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorProfileCard;
