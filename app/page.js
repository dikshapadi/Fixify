"use client"
import React, { useEffect } from 'react'
import Hero from './_components/Hero'
import CategoryList from './_components/CategoryList'
import GlobalApi from './_services/GlobalApi'
import { useState } from 'react'

function Home() {
  const[categoryList, setCategoryList] = useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories)
    })
  }
  return (
    <div>
      <Hero></Hero>
      <CategoryList categoryList={categoryList}/>
    </div>
  )
}

export default Home