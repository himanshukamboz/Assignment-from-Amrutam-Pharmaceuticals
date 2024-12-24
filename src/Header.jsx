import React from 'react'
import logo from "./assets/assignment logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    {/* Header ------------------------------------------------>*/}
    <div className='w-screen h-[94px] bg-[#fff7e2] flex justify-center items-center font-[sans-serif]'>
        <div className='flex items-center justify-between w-[80%]'>
            <div className='flex items-center gap-x-10 mx-4' >
                <img src={logo} alt="logo" className='w-[259px] h-[49px] cursor-pointer' />
                <div >
                    <ul className='flex list-none no-underline gap-x-8 mx-4 items-center'>
                        <Link to="/"><li className='text-[20px] text-[#474747] font-medium cursor-pointer hover:text-[#3B6E8D]'>Home</li></Link>
                        <Link to="/find-doctors"><li className='text-[20px] text-[#3A643B] font-bold cursor-pointer hover:text-[#3B6E8D]'>Find Doctors</li></Link>
                        <li className='text-[20px] text-[#474747] font-medium cursor-pointer hover:text-[#3B6E8D]'>About Us</li>
                    </ul>
                </div>

            </div>
            {/* Login and Sign up button ----------------------------------------> */}
            <div>
                <button className='border rounded-lg border-[#3A643B] text-[#3A643B] text-[24px] font-medium p-2 px-7 mr-3'>Login</button>
                <button className='border border-[#3A643B] bg-[#3A643B] text-white text-[24px] font-medium rounded-lg p-2 px-7 '>Sign-up</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
