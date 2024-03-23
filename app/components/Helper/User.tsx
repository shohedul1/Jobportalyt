'use client';
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface Props {
    session: Session;
}
const User = ({session}:Props) => {
  return (
    <div className="cursor-pointer" onClick={()=>{signOut({callbackUrl:'/signup'})}}>
        <img src={`${session?.user?.image}`} alt="user" className="w-[50px] h-[50px] rounded-full" />
    </div>
  )
}

export default User;