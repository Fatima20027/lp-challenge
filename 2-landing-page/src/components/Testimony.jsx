import React, { useState } from "react";

import ManImg from '../images/man-pp.webp';
import Man1Img from '../images/man1-pp.jpg';
import WomanImg from '../images/woman-pp.webp';
import HappywomanImg from '../images/happy-woman-pp.avif';

const Testimony = () => {
  const testiData = [
    {
      id: 1,
      image: ManImg,
      description: "Working with this team helped us clearly define our goals and build a focused growth strategy. Within a few months, we saw stronger decision-making.",
      founder: "Founder",
      company: "Digital Services Company"
    },
    {
      id: 2,
      image: Man1Img,
      description: "Working with this team helped us clearly define our goals and build a focused growth strategy. Within a few months, we saw stronger decision-making.",
      founder: "Founder",
      company: "Digital Services Company"
    },
    {
      id: 3,
      image: WomanImg,
      description: "Working with this team helped us clearly define our goals and build a focused growth strategy. Within a few months, we saw stronger decision-making.",
      founder: "Founder",
      company: "Digital Services Company"
    },
    {
      id: 4,
      image: HappywomanImg,
      description: "Working with this team helped us clearly define our goals and build a focused growth strategy. Within a few months, we saw stronger decision-making.",
      founder: "Founder",
      company: "Digital Services Company"
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testiData.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testiData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full md:py-20 py-10">
      {/* Header Section */}
      <div className="md:max-w-2xl w-full m-auto text-center px-4">
        <h1 className="font-semibold text-3xl leading-snug text-center">What Our Customers Say</h1>
        <p className="text-center md:text-xs mx-auto leading-relaxed text-gray-700 py-3">
          Our programs are carefully structured to support business owners and leaders at every stage of growth. Each program blends strategic guidance, practical tools, and ongoing accountability.
        </p>
      </div>

      {/* SLIDER CONTAINER 
         1. max-w-xl: Limits the width so it doesn't stretch across the whole screen.
         2. mx-auto: Centers the slider in the middle of the page.
         3. overflow-hidden: Hides the cards that are off-screen.
      */}
      <div className="mt-10 max-w-[90vw] md:max-w-xl mx-auto overflow-hidden relative">
        
        {/* THE TRACK
           1. We translate THIS div, not the individual cards.
           2. transition-transform: Makes the slide smooth.
        */}
        <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testiData.map((testi) => (
            /* THE CARD WRAPPER
               1. w-full: Forces the card to take up 100% of the parent container (max-w-xl).
               2. flex-shrink-0: Prevents the card from getting squished.
            */
            <div key={testi.id} className="w-full shrink-0 px-2"> 
              <div className="flex flex-col md:flex-row shadow-sm border border-gray-100 bg-white rounded-xl p-6 md:p-8 items-center md:items-start gap-6">
                
                {/* Image */}
                <img src={testi.image} alt="founder" className="w-20 h-20 rounded-full object-cover shadow-sm shrink-0" />
                
                {/* Text Content */}
                <div className="space-y-3">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500 mx-auto md:mx-0" fill="currentColor">
                        <path d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z" />
                        <path d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z" />
                    </svg>
                    
                    <p className="text-sm text-gray-600 text-center md:text-left leading-relaxed">
                        {testi.description}
                    </p>
                    
                    <div className="text-xs mt-6 text-center md:text-left">
                        <p className="text-black font-semibold pb-1">{testi.founder}</p>
                        <span className="text-gray-500">{testi.company}</span>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 justify-center">
        <button 
            className="rounded-full p-2 border border-gray-300 hover:border-gray-800 hover:bg-gray-50 transition-colors" 
            onClick={prev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
            className="rounded-full p-2 border border-gray-300 hover:border-gray-800 hover:bg-gray-50 transition-colors" 
            onClick={next}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default Testimony;