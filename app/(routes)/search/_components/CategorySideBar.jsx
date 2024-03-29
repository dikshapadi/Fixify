"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CategorySideBar() {
  const params = useParams();
  //console.log(params);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };
  useEffect(() => {
    setSelectedCategory(params.category);
  }, [params]);
  return (
    <>
      <div className="font-bold mb-3 text-lg text-purple-700">Categories</div>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={"/search/" + category.name}
            key={index}
            className={`flex gap-2 p-3 border rounded-lg mb-3 lg:mr-10 md:mr-10 hover:bg-purple-200 hover:cursor-pointer hover:shadow-md hover:border-purple-700 items-center ${selectedCategory == category.name && "border-purple-900 bg-purple-100 shadow-md"}`}
          >
            <Image src={category.icon.url} alt="icon" width={30} height={30} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategorySideBar;
