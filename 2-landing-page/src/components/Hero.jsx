import React from "react";


const Hero = () => {
  return(
    <div className=" items-center justify-center  relative md:top-25 top-10 md:max-w-2xl w-95 md:w-2xl m-auto text-center ">
      <h1 className=" text-4xl/13 text-center md:text-5xl/13">
        <span className="text-blue-500 font-[Playfair_Display] italic font-light">Designed to Build</span>
        <span className="font-semibold "> Clarity, Confidence, and Growth</span>
      </h1>
      <p className="text-center md:text-xs mx-auto  leading-relaxed text-gray-700 py-3">
        Our programs are carefully structured to support business owners and leaders at every stage of growth. Each program blends strategic guidance, practical tools, and ongoing accountability to help you overcome challenges, make confident decisions, and achieve measurable, sustainable results.
      </p>
      <button className="bg-blue-500 text-white px-4 py-3 rounded-full flex md:text-sm shadow-lg shadow-blue-500/50 hover:bg-blue-400 cursor-pointer duration-300 m-auto my-5 w-full md:w-auto items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 relative  right-1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        Book a 20-min Strategy Call

      </button>
      
    </div>
  )
}

export default Hero;