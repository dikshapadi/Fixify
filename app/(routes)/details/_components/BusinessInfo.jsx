import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function BusinessInfo({ businessDeet }) {
  return (
    businessDeet.name && (
      <>
        <div className="md:flex gap-4 items-center">
          <Image
            src={businessDeet.images[0].url}
            alt="businessimg"
            width={150}
            height={200}
            className="rounded-full h-[150px] object-cover"
          />
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col items-baseline gap-1">
              <h2 className="bg-purple-100 text-purple-700 rounded-full p-1 px-2 text-md">
                {businessDeet.category.name}
              </h2>
              <h2 className="text-[40px] font-bold">{businessDeet.name}</h2>
              <h2 className="flex gap-2 text-lg text-gray-500">
                <MapPin />
                {businessDeet.address}
              </h2>

              <h2 className="flex gap-2 text-lg text-gray-500">
                <Mail />
                {businessDeet.email}
              </h2>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <Button className="bg-purple-700">
                <Share />
              </Button>
              <h2 className="text-purple-700 flex gap-2">
                <User />
                {businessDeet.contactPerson}
              </h2>
              <h2 className="text-gray-500 flex gap-2">
                <Clock />
                Available from 8AM-10PM
              </h2>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default BusinessInfo;
