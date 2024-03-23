'use client';
import Image from 'next/image'
import React from 'react';
import ImageUrl from "@/public/images/chair.jpg"
import { signIn } from 'next-auth/react';

const SingUp = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center '>
       {/* iamge */}
       <Image src={ImageUrl} alt='' width={400} height={200} />
       {/* singup button */}
       <button onClick={() => {signIn('google', { callbackUrl: process.env.NEXTAUTH_PUBLIC_URL })}}className="px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">
        Sing Up Now
       </button>
        
    </div>
  )
}

export default SingUp