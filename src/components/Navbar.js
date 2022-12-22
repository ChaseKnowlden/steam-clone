import React from 'react'
import logo from "../assets/logo.png"
import { FiMenu } from 'react-icons/fi';
import { ImDownload } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className='bg-[#171a21]'>
        <div className="flex items-center max-w-[50vw] mx-auto relative">
            <div className='flex items-center justify-center lg:justify-start py-3 px-2 lg:py-6 lg:px-10 w-full lg:w-auto'>
                <div className='lg:hidden left-4 absolute text-white'>
                    <FiMenu className='text-[30px]' />
                </div>
                <div className='flex items-center justify-center text-white lg:text-[#c5c3c0] font-semibold text-[18px] lg:text-[24px]'>
                    <img src={logo} alt="" className="w-10 h-10 mr-2 lg:w-12 lg:h-12" />
                    <p className="tracking-wider lg:tracking-widest">STEAM</p>
                </div>
            </div>
            <div className='hidden lg:flex pl-10'>
                <ul className='text-[#c5c3c0] text-[13px] flex gap-4'>
                    <li>
                        <p className='hover:text-white'>STORE</p>
                    </li>
                    <li>
                        <p className='hover:text-white'>COMMUNITY</p>
                    </li>
                    <li>
                        <p className='hover:text-white'>ABOUT</p>
                    </li>
                    <li>
                        <p className='hover:text-white'>SUPPORT</p>
                    </li>
                </ul>
            </div>
            <div className='text-white absolute right-10 top-0 text-[12px] lg:flex items-center mt-2 hidden'>
                <div className='flex items-center bg-[#5c7e10] px-2 py-1'>
                    <ImDownload className='mr-2' />
                    <p className=''>Install Steam</p>
                </div>
                <div className='pl-4'>
                    <p className='text-[#c5c3c0] hover:text-white'>login</p>
                </div>

                <div className='h-[15px] w-[1px] bg-white mx-2'></div>

                <div className='flex items-center'>
                    <p className='text-[#c5c3c0] hover:text-white'>language</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar