import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { TestimonialList } from "./components/TestimonialList";
import FAQ from "./components/FAQ.";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>

    <Navbar />

      <div className="px-4 md:px-20 pt-20 flex flex-col md:flex-row items-center justify-center md:pt-20">
      {/* Left Section */}
      <div className="max-w-[60%] flex flex-col justify-start items-center md:items-start gap-2.5 text-center md:text-left">
        {/* Heading */}
        <div className="self-stretch">
          <h1 className="text-black text-3xl md:text-5xl font-semibold font-['Poppins'] capitalize leading-snug">
            Streamline <span className="text-primary">Employee</span>
          </h1>
          <h1 className="text-primary text-3xl md:text-5xl font-semibold font-['Poppins'] capitalize leading-snug">
            Attendance <span className="text-black">with Ease!</span>
          </h1>
        </div>
    
        {/* Description */}
        <p className="max-w-full md:max-w-[550px] text-gray-500 text-base md:text-xl font-medium font-['Poppins']">
          Track work hours effortlessly with our smart clock-in and clock-out system. Boost productivity, ensure accuracy, and manage your workforce efficiently—all in one place.
        </p>
    
        {/* Button */}
        <div className="mt-4">
          <button className="px-6 py-3 md:px-10 md:py-4 bg-primary rounded-lg flex items-center gap-2 text-white text-sm md:text-base font-medium font-['Poppins']">
            Get Started
            <HiOutlineArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    
      {/* Hero Image */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-6 md:mt-0">
        <Image src="/hero-image.png" alt="Hero" width={400} height={80} className="w-[80%] md:w-[400px] h-auto" />
      </div>
    </div>
    
  {/* divider */}
  <div className="m-auto mx-80">
    <p className="border-b-2 border-gray-300"></p>
  </div>

  {/* Key features */}
  
      <div className="text-black text-center">
        <h2 className="mt-8 text-4xl font-['Poppins'] font-semibold ">Key Features</h2>
        <p className="w-[60%] m-auto mt-2 font-medium md:text-xl text text-gray-500 text-lg font-['Poppins']">Streamline employee attendance with our intuitive clocking system. Whether remote or on-site, track work hours seamlessly, reduce errors, and boost productivy.</p>
      </div>

      <div className="text-black flex flex-col md:flex-row gap-10 m-auto mx-[20%] mt-10 mb-20">
        
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

      <div className="bg-[#E7F8E6] text-black">
        <h2 className="mt-8 text-4xl font-['Poppins'] text-center font-semibold pt-10">How It Works</h2>

        <div className="mt-10 flex flex-col md:flex-row m-auto justify-center items-center pb-20 gap-6">
          <div className="flex flex-col text-center mb-5 md:p-4">
            <h3 className="md:text-4xl text-2xl font-bold">Effortless Clock-In & Clock-Out</h3>
            <p className="font-medium max-w-3xl text-gray-500 text-lg md:text-xl font-['Poppins']">
              Employees can seamlessly clock in and out with just one click, ensuring accurate work hours every day.
            </p>
          </div>

          {/* Responsive Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/laptop.png"
              alt="Logo"
              width={700} 
              height={100}
              className="w-[300px] md:w-[500px] lg:w-[700px] h-auto"
            />
          </div>
        </div>
      </div>


      <div className=" mt-8">
        <h1 className="flex flex-col md:text-4xl gap-2 text-center">
          <span className="text-primary font-semibold font-['Poppins'] capitalize">Trusted by Teams, Loved by HR</span>
          <span className="text-black font-semibold font-['Poppins'] capitalize">Hear What Our Users Say!</span>
        </h1>
       <TestimonialList/>
      </div>

          {/* divider */}
    <div className="m-auto mx-80">
      <p className="border-b-2 border-gray-300"></p>
    </div>


    {/* FAQ */}
    <div className="md:pb-10 p-5">
      <FAQ/>
    </div>

    <div className="bg-[#E7F8E6] p-6 md:p-8 m-6 md:m-20">
  <div className="bg-[#295C37] text-white p-10 md:p-16 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6">
    <h3 className="text-2xl md:text-3xl text-center md:text-left max-w-[80%] md:max-w-[40%] font-medium">
      Subscribe To Our Newsletter
    </h3>

    {/* Input with Button inside */}
    <div className="relative w-full max-w-md">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="bg-white px-4 py-3 pr-24 w-full rounded-lg text-black outline-none"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-5 py-2 rounded-md">
        Subscribe
      </button>
    </div>
  </div>
</div>


    <div>
      <Footer/>
    </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#295C37] text-gray-300">
        <p>&copy; {new Date().getFullYear()} Employee Clocking System. All rights reserved.</p>
      </footer>
    </div>
  );
}
