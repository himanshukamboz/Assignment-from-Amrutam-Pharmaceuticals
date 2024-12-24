import React from "react";

const TimeSelector = ({
  ismorning,
  timings,
  selectedTime,
  setselectedTime,
}) => {
  const handleTime = (time) => {
    if(time===selectedTime){
        setselectedTime("");
    }
    else{
        setselectedTime(time);
    }
    
  };
  return (
    <div className="flex flex-wrap py-4 gap-3">
      {timings.map((e, i) => {
        return e === selectedTime ? (
          <div
            className="border border-[#EBEBEB] text-white bg-[#3A643B] font-inter text-sm p-3 px-5 rounded-xl cursor-pointer hover:border-0.5 hover:border-[#3A643B]"
            key={i}
            onClick={() => handleTime(e)}
          >
            {e} {ismorning ? "AM" : "PM"}
          </div>
        ) : (
          <div
            className="border border-[#EBEBEB] text-[#131313] font-inter text-sm p-3 px-5 rounded-xl cursor-pointer hover:border-0.5 hover:border-[#3A643B]"
            key={i}
            onClick={() => handleTime(e)}
          >
            {e} {ismorning ? "AM" : "PM"}
          </div>
        );
      })}
    </div>
  );
};

export default TimeSelector;
