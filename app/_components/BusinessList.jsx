import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BusinessList({ businessList, title }) {
  return (
    <div className="mt-5 ml-5 mr-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-5">
        {businessList.length > 0
          ? businessList.map((business, index) => (
              <Link
                href={"/details/" + business.id}
                key={index}
                className="shadow-md rounded-lg hover:shadow-lg hover:shadow-purple-200 hover:scale-105 transition-all ease-in-out"
              >
                <Image
                  src={business.images[0].url}
                  width={600}
                  height={200}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />
                <div className="flex flex-col items-baseline p-2">
                  <h2 className="bg-purple-200 rounded-lg px-2 text-[14px]">
                    {business.category.name}
                  </h2>
                  <h2 className="font-bold text-lg">{business.name}</h2>
                  <h2 className="text-purple-700">{business.contactPerson}</h2>
                  <h2 className="text-gray-500 text-sm">{business.address}</h2>
                  <Button className="bg-purple-700 rounded-lg mt-2">
                    Book now
                  </Button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default BusinessList;
