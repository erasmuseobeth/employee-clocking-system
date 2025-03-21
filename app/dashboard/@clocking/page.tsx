"use client"
import { format } from "date-fns";
import { useState, useEffect } from "react";

export default function ClockingSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold">Welcome, Victoria!</h2>
      <p className="text-3xl font-semibold mt-2">{format(time, "hh:mm a")}</p>
      <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full">
        CLOCK IN
      </button>
    </div>
  );
}
