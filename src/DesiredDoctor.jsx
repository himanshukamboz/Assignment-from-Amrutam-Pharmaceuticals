import React,{useState} from 'react'
import { greyDropDownIcon } from './assets/svgs/icons'

const DesiredDoctor = ({name,options,settags,tags,dropdowns,id}) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  
  //To toggle Rotate icon
  const toggleDropdown = () => {
    setIsDropOpen(!isDropOpen);
  };

  //To set the tags array that are selected
  const handleSelectedOption = (id,value)=>{
    const existingIndex = tags.findIndex((item)=>item.id===id)
    if (existingIndex!==-1){
      const updatedTags = [...tags];
      updatedTags[existingIndex].value=value
      settags(updatedTags)
    }
    else{
      settags([...tags,{id,value}])
    }
    
    setIsDropOpen(false)
  }
  return (
    <div className="flex relative items-center cursor-pointer w-[140px] mr-[2%] " >
            
            <select
              className="font-medium w-full cursor-pointer text-[#585858] text-sm font-nunito bg-[#F3F3F3] z-10 rounded-lg pl-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none "
              onChange={(event)=>handleSelectedOption(id,event.target.value)}
              onMouseDown={toggleDropdown}
              onBlur={() => setIsDropOpen(false)}
              value=""
            >
              <option hidden value={name}>
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

export default DesiredDoctor