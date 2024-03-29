import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import moment from "moment/moment";

function BookingSection({ children, businessDeet }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const { data } = useSession();
  const [bookedSlot, setBookedSlot] = useState([]);
  //console.log(data);
  useEffect(() => {
    getTime();
    setDate();
    setSelectedTime();
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };
  const saveBooking = () => {
    GlobalApi.createBooking(
      businessDeet.id,
      moment(date).format('DD-MMM-yyyy'),
      selectedTime,
      data.user.email,
      data.user.name,
    ).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          toast("Service booked successfully!");
        }
      },
      (e) => {
        toast("Error while booking service.");
      },
    );
  };
  // call the fucntion whenever change in date picked
  useEffect(() => {
    date && businessBookedSlot();
  }, [date]);
  // calling API to check for bookings on that date
  const businessBookedSlot = () => {
    GlobalApi.businessBookedSlot(businessDeet.id, moment(date).format('DD-MMM-yyyy')).then((resp) => {
      //console.log(resp);
      setBookedSlot(resp.bookings);
    });
  };
  // find in the bookedSlots array if the time matches any time
  const isSlotBooked = (time) => {
    return bookedSlot.find((item) => item.time == time);
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a service?</SheetTitle>
            <SheetDescription>
              Date and Time slot to book a service
              <div className="flex flex-col gap-5 items-baseline mt-2">
                <h2 className="font-bold">Select a date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <h2 className="font-bold mt-2">Select time slot</h2>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {timeSlot.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`border rounded-full p-2 px-3 hover:bg-purple-700 hover:text-white ${selectedTime == item.time && "bg-purple-700 text-white"}`}
                    onClick={() => setSelectedTime(item.time)}
                    disabled={isSlotBooked(item.time)}
                  >
                    {item.time}
                  </Button>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <div className="flex gap-5">
                <Button variant="destructive">Cancel</Button>
                <Button
                  disabled={!(selectedTime && date)}
                  className="bg-purple-700"
                  type="submit"
                  onClick={() => saveBooking()}
                >
                  Book
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
