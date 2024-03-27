import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <>
      <div className="p-5 shadow-sm flex justify-between">
        <div className="flex items-center gap-8">
          <Image src="/logo.svg" alt="logo" width={150} height={100} />
          <div className="md:flex items-center gap-6 hidden">
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">Home</h2>
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">Services</h2>
            <h2 className="hover:scale-105 hover:text-purple-700 cursor-pointer">About Us</h2>
          </div>
        </div>

        <div>
            <Button className='bg-[#7743DB]'>Get Started</Button>
        </div>
      </div>
    </>
  );
}

export default Header;
