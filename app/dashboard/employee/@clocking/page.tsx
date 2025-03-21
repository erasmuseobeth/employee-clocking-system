"use client";
import ClockInOut from "@/app/components/ClockInOut";
import { useState, useEffect } from "react";

export default function ClockingSection() {
  const [time, setTime] = useState(new Date());

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
    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
      <h2 className="text-lg font-bold text-gray-500">Welcome, Victoria!</h2>

      {/* Time Display */}
      <p className="text-4xl font-semibold mt-2 text-black">
        {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
      </p>

      {/* Date Display */}
      <p className="text-lg text-gray-600">{formattedDate}</p>

      {/* Clock-In and Out Component */}
      <ClockInOut />
    </div>
  );
}
