"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
import SuggestedBusinessList from "../_components/SuggestedBusinessList";

function BusinessDetail() {
  const params = useParams();
  const { data, status } = useSession();
  const [businessDeet, setBusinessDeet] = useState([]);
  useEffect(() => {
    getBusinessById();
  });
  if (status == "loading") {
    <p>Loading...</p>;
  }
  if (status == "unauthenticated") {
    signIn("descope");
  }
  const getBusinessById = () => {
    GlobalApi.getBusinessById(params.businessId).then((resp) => {
      setBusinessDeet(resp.businessList);
    });
  };
  return (
    status == "authenticated" &&
    businessDeet && (
      <div className="py-8 px-10 md:px-36">
        <BusinessInfo businessDeet={businessDeet} />

        <div className="grid grid-cols-3 mt-16">
          <div className="col-span-3 md:col-span-2 order-last md:order-first">
            <BusinessDescription businessDeet={businessDeet} />
          </div>
          <div>
            <SuggestedBusinessList businessDeet={businessDeet} />
          </div>
        </div>
      </div>
    )
  );
}

export default BusinessDetail;
