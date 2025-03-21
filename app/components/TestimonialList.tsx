import Image from 'next/image'
import React from 'react'

import { testimonials, Testimonial } from '../data/testimonials'


type TestimonialCardProps = Testimonial & { bgColor: string };

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, about, comment, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor} text-black flex flex-col`}>
      <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
          <Image src="/victoria-user.jpg" alt='testifier' width={48} height={48} className='rounded-full'/>
          <div className='flex flex-col'>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="mt-2">{comment}</p>
          </div>
      </div>
      <p className="text-gray-600 mt-3 text-right self-end">{about}</p>
    </div>
  );
};

export const TestimonialList = () => {

  const colors = ["bg-[#E0E4F5]", "bg-[#F5E0E0]", "bg-[#E0F5EC]"];

  return (
    <div className="flex flex-col md:flex-row gap-5 p-10 mb-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial}  bgColor={colors[index % colors.length]}/>
      ))}
    </div>
  );
}

