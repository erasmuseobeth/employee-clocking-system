import Image from "next/image";
import Link from "next/link";
import { ImNotification } from "react-icons/im";
import { LuSettings, LuUserRound } from "react-icons/lu";

export default function DashboardLayout({
  children,
  attendance,
  stats,
  clocking,
}: {
  children: React.ReactNode;
  attendance: React.ReactNode;
  stats: React.ReactNode;
  clocking: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <nav className="w-full bg-white shadow-md p-4 border-b border-gray-300">
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image src="/Logo-victoria.png" alt="Logo" width={24} height={24} />
              <h1 className="text-2xl font-bold text-gray-900">Clocking System</h1>
            </div>
          </Link>

          <div className="text-lg flex items-center gap-x-4 font-medium">
            <Link href="/" className="text-gray-700 hover:text-primary mr-4">Dashboard</Link>
            <Link href="#" className="text-gray-700 hover:text-primary mr-4">Leave Request</Link>
            <div className="text-black text-3xl flex gap-4">
            <LuSettings />
            <ImNotification />
            <LuUserRound />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Section */}
        <div className="w-3/5 p-6">
          {clocking}
          {stats}
        </div>

        {/* Right Section - Attendance History */}
        <div className="w-2/5 p-6 bg-gray-600 m-4 rounded-xl">
          {attendance}
        </div>
      </div>

      {/* Render the page content */}
      <main>{children}</main>
    </div>
  );
}
