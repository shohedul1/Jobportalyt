import Image from 'next/image'
import React from 'react';
import LogoImage from "@/public/images/logo.png"
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='overflow-hidden shadow-md h-[13vh]'>
      <div className='w-[90%] h-[100%] md:w-[80%] mx-auto bg-yellow-100 flex items-center  justify-between '>
        {/* logo */}
        <div>
        <Link href={"/"}>logo</Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href={"/signup"}>
            <button className=' duration-300 px-4 py-1.5 text-[14px] sm:text-[16px] md:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all'>
              sign up
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Nav