const attendanceData = [
  { date: "Monday 12, March 2025", status: "P", color: "green" },
  { date: "Monday 11, March 2025", status: "A", color: "red" },
  { date: "Monday 10, March 2025", status: "L", color: "yellow" },
];

export default function AttendanceHistory() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Attendance History</h2>
      <div className="space-y-2">
        {attendanceData.map((entry, index) => (
          <div key={index} className="flex justify-between bg-gray-100 p-3 rounded">
            <span>{entry.date}</span>
            <span className={`px-2 py-1 text-white rounded bg-${entry.color}-500`}>
              {entry.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
