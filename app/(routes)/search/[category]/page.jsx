"use client";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function BusinessByCategory() {
  const params = useParams();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  });
  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category).then((resp) => {
      //console.log(resp?.businessLists);
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <div>
      <BusinessList businessList={businessList} title={params.category} />
    </div>
  );
}

export default BusinessByCategory;
