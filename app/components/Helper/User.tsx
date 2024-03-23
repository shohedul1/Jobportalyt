'use client';
import { Session } from "next-auth";

interface Props {
    session: Session;
}
const User = ({session}:Props) => {
  return (
    <div className="cursor-pointer">
        <img src={`${session?.user?.image}`} alt="user" className="w-[50px] h-[50px] rounded-full" />
    </div>
  )
}

export default User