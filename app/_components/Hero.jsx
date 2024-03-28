import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="flex items-center flex-col justify-center pt-10 pb-10">
      <h2 className="font-bold text-[35px] text-center">
        Find Home <span className="text-[#7743DB]">Service/Repair</span> Near
        You
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore Best Home Service & Repair Near You
      </h2>
      <div className="mt-5 flex gap-6">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="rounded-full">
          <Search className="h-5 w-5"></Search>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
