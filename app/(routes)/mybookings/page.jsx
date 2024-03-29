import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "../mybookings/_component/BookingHistoryList"

function MyBooking() {
  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-[20px]">My Bookings</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked"><BookingHistoryList/></TabsContent>
        <TabsContent value="completed"></TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
