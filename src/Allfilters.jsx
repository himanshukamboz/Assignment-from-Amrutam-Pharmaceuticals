import React,{useState} from 'react'
import { greyDropDownIcon } from './assets/svgs/icons';

const Allfilters = ({name,options}) => {
    const [isDropOpen, setIsDropOpen] = useState(false);
  const [selectedOption,setSelectedOption]=useState(name);
    const toggleDropdown = () => {
        setIsDropOpen(!isDropOpen);
      };
      const handleSelectedOption = (event)=>{
        setSelectedOption(event.target.value)
        setIsDropOpen(false)
      }
  return (
    <div className="flex relative items-center cursor-pointer w-[140px] mr-[2%]">
            
            <select
              className="font-medium w-full cursor-pointer text-[#3A643B] text-sm font-nunito bg-[#F3F3F3] z-10 rounded-lg pl-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none "
              onChange={handleSelectedOption}
              onMouseDown={toggleDropdown}
              onBlur={() => setIsDropOpen(false)}
              
            >
              <option hidden value={selectedOption}>
                {name}
              </option>

              {options.map((option,index)=>(
                <option className="rounded-xl" value={option} key={index}>
                {option}
              </option>
              )
              )}
             
            </select>
            <div
              className={`z-20 absolute right-4  top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-150 ${
                isDropOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {greyDropDownIcon}
            </div>
          </div>
  )
}

export default Allfilters