"use client";
import { useState, useEffect } from "react";
import { LuAlarmClock } from "react-icons/lu";

export default function ClockInOut() {
  const [checkInTime, setCheckInTime] = useState<Date | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [totalHours, setTotalHours] = useState<string>("00:00");

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem("attendance") || "{}");
    const today = new Date().toDateString();

    if (storedAttendance[today]) {
      const { clockIn, clockOut } = storedAttendance[today];
      setCheckInTime(clockIn ? new Date(clockIn) : null);
      setCheckOutTime(clockOut ? new Date(clockOut) : null);
      setIsCheckedIn(clockIn && !clockOut);
    }
  }, []);

  useEffect(() => {
    if (checkInTime && checkOutTime) {
      const duration = (checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60);
      const hours = Math.floor(duration / 60);
      const minutes = Math.floor(duration % 60);
      setTotalHours(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
    }
  }, [checkInTime, checkOutTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCheckedIn && checkInTime) {
      interval = setInterval(() => {
        const now = new Date();
        const duration = (now.getTime() - checkInTime.getTime()) / (1000 * 60);
        const hours = Math.floor(duration / 60);
        const minutes = Math.floor(duration % 60);
        setTotalHours(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCheckedIn, checkInTime]);

  const handleClockInOut = () => {
    const now = new Date();
    const today = now.toDateString();
    const storedAttendance = JSON.parse(localStorage.getItem("attendance") || "{}");

    if (!isCheckedIn) {
      storedAttendance[today] = { clockIn: now, clockOut: null };
      setCheckInTime(now);
      setCheckOutTime(null);
    } else {
      storedAttendance[today].clockOut = now;
      setCheckOutTime(now);
    }

    localStorage.setItem("attendance", JSON.stringify(storedAttendance));
    setIsCheckedIn(!isCheckedIn);
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <button
        onClick={handleClockInOut}
        className="cursor-pointer relative w-48 h-48 bg-primary text-white font-bold 
        text-lg rounded-full flex items-center justify-center shadow-lg 
        after:content-[''] after:absolute after:inset-0 after:rounded-full 
        after:bg-green-300 after:blur-md after:opacity-50 mt-4"
      >
        {isCheckedIn ? "CHECK OUT" : "CLOCK IN"}
      </button>

      <div className="flex gap-8 mt-6">
        <div className="flex flex-col items-center">
          <LuAlarmClock className="text-black text-[32px]" />
          <p className="text-lg font-bold text-black">
            {checkInTime ? checkInTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : "00:00"}
          </p>
          <p className="text-md text-gray-700">Check-In Time</p>
        </div>

        <div className="flex flex-col items-center">
          <LuAlarmClock className="text-black text-[32px]" />
          <p className="text-lg font-bold text-black">
            {checkOutTime ? checkOutTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : "00:00"}
          </p>
          <p className="text-md text-gray-700">Check-Out Time</p>
        </div>

        <div className="flex flex-col items-center">
          <LuAlarmClock className="text-black text-[32px]" />
          <p className="text-lg font-bold text-black">{totalHours}</p>
          <p className="text-md text-gray-700">Total Hours</p>
        </div>
      </div>

      <p className="text-lg text-gray-600 mt-4">Clock in and get your day started</p>
    </div>
  );
}
