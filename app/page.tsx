import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuLock } from "react-icons/lu";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4">
        <div className="max-w-[90%] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/Logo-victoria.png" alt="Logo" width={24} height={24}/>
          <h1 className="text-2xl font-bold text-gray-900">Clocking System</h1>
          </div>

          <div className="text-lg flex items-center gap-x-4 font-medium">
            <a href="/login" className="text-gray-700 hover:text-primary mr-4">Home</a>
            <a href="/login" className="text-gray-700 hover:text-primary mr-4">Features</a>
            <a href="/login" className="text-gray-700 hover:text-primary mr-4">Pricing</a>
            <a href="/login" className="text-gray-700 hover:text-primary mr-4">Login</a>
            <a className="px-4 py-[5px] cursor-pointer bg-primary rounded-lg inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-normal font-['Poppins']">Get Started</div></a>
            <div className="text-black text-3xl"><MdOutlineWbSunny /></div>
          </div>
        </div>
      </nav>

    {/* Hero Section */}

    <div className="p-20 flex items-center justify-center">
    <div className="w-[596px] inline-flex flex-col justify-start items-start gap-2.5">
  <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
    <h1 className="self-stretch justify-start">
      <div className="mb-2.5">
        <span className="text-black text-5xl font-semibold font-['Poppins'] capitalize">Streamline </span>
        <span className="text-primary text-5xl font-semibold font-['Poppins'] capitalize">Employee</span>
      </div>
    <div className="mt-0.5">
    <span className="text-primary text-5xl font-semibold font-['Poppins'] capitalize">Attendance</span>
    <span className="text-black text-5xl font-semibold font-['Poppins'] capitalize"> with Ease!</span>
    </div>
    </h1>
    <div className="w-[550px] justify-start text-gray-500 text-lg font-medium font-['Poppins']">Track work hours effortlessly with our smart clock-in and clock-out system. Boost productivity, ensure accuracy, and manage your workforce efficiently—all in one place.</div>
  </div>
  <div className="px-10 py-4 bg-primary rounded-lg inline-flex justify-center items-center gap-2.5 ">
    <div className="justify-start text-white text-base font-normal font-['Poppins']">Get Started</div>
    <HiOutlineArrowRight />
    </div>
  </div>


  {/* Hero Image */}
  <div>
  <Image src="/hero-image.png" alt="Logo" width={400} height={80}/>
  </div>
</div>

{/* divider */}
<div className="m-auto mx-80">
  <p className="border-b-2 border-gray-300"></p>
</div>

  {/* Key features */}
  
      <div className="text-black text-center">
        <h2 className="mt-8 text-4xl font-['Poppins'] font-semibold ">Key Features</h2>
        <p className="w-[60%] m-auto mt-2 font-medium text-gray-500 text-lg font-['Poppins']">Streamline employee attendance with our intuitive clocking system. Whether remote or on-site, track work hours seamlessly, reduce errors, and boost productivy.</p>
      </div>

      <div className="text-black flex gap-10 m-auto mx-[20%] mt-10 mb-20">
        
          <div className="p-10 flex flex-col justify-center items-center gap-4 shadow rounded-2xl">
            <div><LuAlarmClock  className="p-4 bg-[#EBFFE0] text-7xl rounded-lg font-bold"/></div>
            <div className="text-[20px] text-center mt-2 font-semibold">Clock-in & Clock-out Tracking</div>
          </div>
          
          <div className="p-10 flex flex-col justify-center items-center gap-4 shadow rounded-2xl">
            <div><LuChartNoAxesCombined className="p-4 bg-[#EBFFE0] text-7xl rounded-lg font-bold"/></div>
            <div className="text-[20px] text-center mt-2 font-semibold">HR Dashboard & Analytics</div>
          </div>

          <div className="p-10 flex flex-col justify-center items-center gap-4 shadow rounded-2xl">
            <div><LuLock  className="p-4 bg-[#EBFFE0] text-7xl rounded-lg font-bold"/></div>
            <div className="text-[20px] text-center mt-2 font-semibold"> Secure Employee Login</div>
          </div>
      </div>

      {/* How it works */}

      <div className="bg-[#E7F8E6] text-black relative overflow-hidden">
  <h2 className="mt-8 text-4xl font-['Poppins'] text-center font-semibold pt-10">How It Works</h2>

  <div className="mt-10 flex justify-center items-center relative max-w-6xl mx-auto">
    {/* Text Content */}
    <div className="flex flex-col z-10">
      <h3 className="text-[24px] font-bold">Effortless Clock-In & Clock-Out</h3>
      <p className="font-medium max-w-3xl text-gray-500 text-lg font-['Poppins']">
        Employees can seamlessly clock in and out with just one click, ensuring accurate work hours every day.
      </p>
    </div>

    {/* Overlapping Laptop Image */}
    <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
      <Image src="/laptop.png" alt="Logo" width={400} height={80} />
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-gray-300">
        <p>&copy; {new Date().getFullYear()} Employee Clocking System. All rights reserved.</p>
      </footer>
    </main>
  );
}
