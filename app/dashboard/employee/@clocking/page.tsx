"use client";
import ClockInOut from "@/app/components/ClockInOut";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
// import "./calendarStyles.css"; // Import custom styles

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ClockingSection() {
  const [time, setTime] = useState(new Date());
  const [value, onChange] = useState<Value>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the date as "March 17, 2025 - Monday"
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-lg font-bold text-gray-500">Welcome, Victoria!</h2>

        {/* Time Display */}
        <p className="text-4xl font-semibold mt-2 text-black">
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>

        {/* Date Display */}
        <p className="text-lg text-gray-600">{formattedDate}</p>

        {/* Clock-In and Out Component */}
        <ClockInOut />
      </div>

      {/* Calendar Component */}
      <div className="hidden md:block">
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={({ date }) =>
            date.toDateString() === new Date().toDateString() ? "highlight-date" : ""
          }
        />
      </div>
    </div>
  );
}
