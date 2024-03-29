"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "../mybookings/_component/BookingHistoryList"
import { useSession } from "next-auth/react";
import GlobalApi from "@/app/_services/GlobalApi";

function MyBooking() {
  const [bookingHistory, setBookingHistory] = useState([]);
    const {data} = useSession();
    useEffect(()=>{
      data&&GetUserBookingHistory();
    },[data]);
  const GetUserBookingHistory = ()=>{
    GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
      //console.log(resp);
      setBookingHistory(resp.bookings);
    })
  }
  const filterData = (type)=>{
    const result = bookingHistory.filter(item=>type=='booked'?new Date(item.date)>new Date():new Date(item.date)<new Date());
    return result;
  }
  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px]">My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked"><BookingHistoryList bookingHistory={filterData('booked')}/></TabsContent>
        <TabsContent value="completed"><BookingHistoryList bookingHistory={filterData('completed')}/></TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
