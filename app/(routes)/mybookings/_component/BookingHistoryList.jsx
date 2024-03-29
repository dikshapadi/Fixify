import { Calendar, Clock, Mail, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function BookingHistoryList({bookingHistory}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {bookingHistory.map((booking, index)=>(
        <div key={index} className="flex gap-4 mb-3 border rounded-lg p-3">
          <Image src={booking?.businessList?.images[0].url} alt="image" width={120} height={80} className="rounded-lg object-cover"/>
          <div className="flex flex-col gap-2">
          <h2 className="font-bold">{booking?.businessList?.name}</h2>
          <h2 className="flex gap-2 text-purple-700"><User/>{booking.businessList.contactPerson}</h2>
          <h2 className="flex gap-2 text-gray-500"><Mail/>{booking.businessList.address}</h2>
          <h2 className="flex gap-2 text-gray-500"><Calendar/>{booking.date}</h2>
          <h2 className="flex gap-2 text-gray-500"><Clock/>{booking.time}</h2>


          </div>
        </div>
      ))}
    </div>
  )
}

export default BookingHistoryList;
