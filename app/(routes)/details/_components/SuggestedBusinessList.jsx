import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookingSection from "./BookingSection";

function SuggestedBusinessList({ businessDeet }) {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    businessDeet.name && getBusinessList();
  });
  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(businessDeet.category.name).then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };
  return (
    <div className="md:pl-7">
      <BookingSection businessDeet={businessDeet}>
        <Button className="flex gap-2 w-full">
          <NotebookPen /> Book Appointment
        </Button>
      </BookingSection>
      <div className="hidden md:block">
        <h2 className="font-bold text-lg mb-3 mt-3">Similar business</h2>
        <div>
          {businessList &&
            businessList.map((business, index) => (
              <Link
                href={"/details/" + business.id}
                className="flex gap-2 mb-2 hover:border border-purple-700 p-2 rounded-lg cursor-pointer hover:shadow-md"
              >
                <Image
                  src={business?.images[0].url}
                  alt="business-img"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-bold">{business.name}</h2>
                  <h2 className="text-purple-700">{business.contactPerson}</h2>
                  <h2 className="text-gray-500">{business.address}</h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
