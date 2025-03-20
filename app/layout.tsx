import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clocking System",
  description: "A clocking system employee web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<nav className="w-full bg-white shadow-md p-4 border-b border-gray-300 fixed top-0 left-0 right-0 z-50">
  <div className="max-w-[90%] mx-auto flex justify-between items-center">
    <a href="/">
      <div className="flex items-center">
        <Image src="/Logo-victoria.png" alt="Logo" width={24} height={24} />
        <h1 className="text-2xl font-bold text-gray-900">Clocking System</h1>
      </div>
    </a>

    <div className="text-lg flex items-center gap-x-4 font-medium">
      <a href="/" className="text-gray-700 hover:text-primary mr-4">Home</a>
      <a href="#" className="text-gray-700 hover:text-primary mr-4">Features</a>
      <a href="#" className="text-gray-700 hover:text-primary mr-4">Pricing</a>
      <a href="/login" className="text-gray-700 hover:text-primary mr-4">Login</a>
      <a className="px-4 py-[5px] cursor-pointer bg-primary rounded-lg inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-white text-base font-normal font-['Poppins']">Get Started</div>
      </a>
      <div className="text-black text-3xl"><MdOutlineWbSunny /></div>
    </div>
  </div>
</nav>


        {children}
      </body>
    </html>
  );
}
