"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function CategorySideBar() {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList();
    }, []);
    const getCategoryList = () => {
        GlobalApi.getCategory().then((resp) => {
        setCategoryList(resp.categories);
        });
    };
  return (
    <><div className='font-bold mb-3 text-lg text-purple-700'>Categories</div>
      <div>
        {categoryList.map((category, index)=>(
            <div key={index} className='flex gap-2 p-3 border rounded-lg mb-3 lg:mr-10'>
                <Image src={category.icon.url} alt='icon' width={30} height={30}/>
                <h2>{category.name}</h2>
            </div>
        ))}
      </div>
    </>
  )
}

export default CategorySideBar