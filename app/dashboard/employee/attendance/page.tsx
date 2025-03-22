"use client";
import { useEffect, useState } from "react";

type AttendanceRecord = {
  clockIn: string | null;
  clockOut: string | null;
};

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<Record<string, AttendanceRecord>>({});

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem("attendance") || "{}");
    setAttendance(storedAttendance);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Attendance History</h2>
      <div className="space-y-4">
        {Object.entries(attendance)
          .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime()) // Sort by recent date
          .map(([date, record]) => {
            const isPresent = !!record.clockIn;
            return (
              <div
                key={date}
                className="flex justify-between items-center p-4 rounded-lg shadow-md border border-gray-200 bg-white"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">{date}</p>
                  <p className="text-sm text-gray-600">
                    Clock-In: {record.clockIn ? new Date(record.clockIn).toLocaleTimeString() : "--:--"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Clock-Out: {record.clockOut ? new Date(record.clockOut).toLocaleTimeString() : "--:--"}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-white rounded-lg font-medium ${
                    isPresent ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {isPresent ? "✅ P" : "❌ A"}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
