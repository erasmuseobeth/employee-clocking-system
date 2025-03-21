"use client"; // Since we are using useState, we need to use "use client"

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const faqs = [
  {
    question: "How does the clock-in system work?",
    answer: "Employees log in and click the clock-in button, which records their attendance.",
  },
  {
    question: "Can I access my attendance history?",
    answer: "Yes, you can view all past attendance records in the dashboard.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use encryption and secure authentication to protect your data.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free trial so you can explore all features before committing.",
  },
  {
    question: "How secure is employee data?",
    answer: "We use industry-standard encryption and security measures to keep your data safe.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="mt-8 text-4xl font-['Poppins'] text-black text-center font-semibold pb-5">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border rounded-lg shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-4 bg-[#295C43] flex justify-between items-center rounded-lg"
          >
            <span className="font-medium">{faq.question}</span>
            <span>{openIndex === index ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}</span>
          </button>
          {openIndex === index && <p className="p-4 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
