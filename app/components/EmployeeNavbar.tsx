"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { LuMail, LuSettings, LuUserRound } from "react-icons/lu";

export default function EmployeeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md p-4 border-b border-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image src="/Logo-victoria.png" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl font-bold text-gray-900 ml-2">Clocking System</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-lg items-center gap-x-6 font-medium">
          <Link href="/dashboard/employee" className="text-gray-700 hover:text-primary">Dashboard</Link>
          <Link href="#" className="text-gray-700 hover:text-primary">Leave Request</Link>
          <div className="text-black text-3xl flex gap-4">
            <LuSettings />
            <LuMail />
            <LuUserRound />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl text-gray-800 cursor-pointer" onClick={() => setIsOpen(true)}>
          <HiMenuAlt3 />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        {/* Close Button */}
        <div className="flex justify-end items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)} className="text-3xl text-black">
            <HiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 p-6 text-lg font-medium">
          <Link href="/dashboard/employee" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Leave Request</Link>
          <Link href="/dashboard/employee/attendance" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Attendance</Link>
          <Link href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Notification</Link>
          <Link href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Mail</Link>
          <Link href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Settings</Link>
          <Link href="#" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Logout</Link>
        </div>
      </div>

      {/* Overlay (Closes Sidebar) */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}
