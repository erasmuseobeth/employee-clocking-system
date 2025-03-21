import React from "react";
import { footerLinks, FooterSection } from "../data/footerData";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className=" text-black py-8 px-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo Section */}
          <div className="items-center space-x-2 hidden md:block">
          <Image 
            src="/Logo-victoria.png" 
            alt="Logo" 
            width={124} 
            height={24} 
            layout="intrinsic" 
            className="md:w-[80px]" 
          />
          </div>

          {/* Footer Links - Responsive */}
          <div className="grid grid-cols-2 md:flex md:justify-evenly lg:flex gap-6 w-full">
            {footerLinks.map((section: FooterSection, index: number) => (
              <div key={index} className="text-gray-400">
                <h4 className="font-semibold mb-2 text-black text-lg">{section.title}</h4>
                <ul>
                  {section.links.map((link: string, i: number) => (
                    <li key={i} className="hover:text-primary cursor-pointer text-sm mb-1">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
