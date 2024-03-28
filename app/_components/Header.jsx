"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
function Header() {
  const data = useSession();
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <>
      <div className="p-5 shadow-sm flex justify-between">
        <div className="flex items-center gap-8">
          <Image src="/logo.png" alt="logo" width={80} height={70} />
          <div className="md:flex items-center gap-6 hidden">
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
              Home
            </h2>
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
              Services
            </h2>
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">
              About Us
            </h2>
          </div>
        </div>

        <div>
          {data?.user?
          <Image src={data?.user?.image} alt='user' width={40} height={40} className="rounded-full" />:
          <Button className="bg-[#7743DB]" onClick={()=>signIn('descope')}>Login/Signup</Button>
          } 
        </div>
      </div>
    </>
  );
}

export default Header;
