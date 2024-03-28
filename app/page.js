"use client";
import React, { useEffect } from "react";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useState } from "react";
import BusinessList from "./_components/BusinessList";

function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      //console.log(resp.businessLists);
      setBusinessList(resp.businessLists);
    });
  };
  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={"Popular Business"} />
    </div>
  );
}

export default Home;
