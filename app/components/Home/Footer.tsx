import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
                {/* 1st part of footer */}
                <div>
                    <h1 className='text-[14px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
                    <p className='text-[14px] text-white text-opacity-70'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure delectus dolores quos id tempora vitae!
                    </p>
                    {/* social icons */}
                    <div className='mt-[1.5rem] flex items-center space-x-3'>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                            <Link href={"https://www.facebook.com/"}><FaFacebook className='text-white' /></Link>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
                            <Link href={"https://www.twitch.tv/"}> <FaTwitch className='text-white' /></Link>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                            <Link href={"https://www.youtube.com/"}>
                                <FaYoutube className='text-white' />
                            </Link>
                        </div>
                        <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                            <Link href={"https://www.instagram.com/"}> <FaInstagram className='text-white' /></Link>

                        </div>

                    </div>
                </div>
                {/* 2st part of footer */}
                <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About US</h1>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Job</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Privacy</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Police</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Application</p>

                </div>
                 {/* 3th part of footer */}
                 <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Quick Link</h1>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>All Jobs</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Job details</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>How to Apply</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Resume</p>

                </div>
                 {/* 4four part of footer */}
                 <div>
                    <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Get In Touch</h1>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>+8801758225368</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>shohedulislam564@gmail.com</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Bogura,Sherpur,bangladesh</p>
                    <p className='text-[15px] w-fit text-[#b4b3b3] hover:text-yellow-300 cursor-pointer  mb-[0.7rem]'>Application</p>

                </div>

            </div>

        </div>
    )
}

export default Footer