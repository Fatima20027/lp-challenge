import React, { useState } from "react";

const Navbar = () => {
  const nav = ['Home', 'Courses', 'About', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2  sticky top-0 z-50  px-2">

      <div className="hidden md:flex justify-between bg-orange-100/30 backdrop-blur-md border-gray-200/10  rounded-full p-2 px-10 shadow-xl/30"> 
        <h1 className="text-2xl font-bold text-slate-900">Logo</h1>
        {/* --- DESKTOP MENU --- */}
        {/* Hidden on mobile (hidden), flex on desktop (md:flex) */}
        <ul className="hidden md:flex gap-8 items-center">
          {nav.map((item) => (
            <li key={item} className="font-medium text-slate-900 hover:text-orange-300 duration-300 cursor-pointer transition-colors">
              {item}
            </li>
          ))}
          
        </ul>
        <button className="flex px-6 py-2  text-white bg-slate-900 font-bold rounded-full    shadow-sm  transition-colors cursor-pointer  border-slate-900 hover:bg-slate-900/90 duration-300   ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-4 size-5 relative right-1.5 md:top-1 bottom-0.5 font-bold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Contact Us
        </button>

      </div>
      
      {/* Top Bar */}
      <div className={`md:hidden flex justify-between items-center border border-gray-200/10 backdrop-blur-md p-4 bg-white/30 transition-all duration-300 ${isOpen ? "rounded-t-[2rem]" : "rounded-[2rem]"}`}>
        <h1 className="text-2xl font-bold text-slate-900">Logo</h1>

        
        
        {/* --- MOBILE BURGER BUTTON --- */}
        {/* Hidden on desktop (md:hidden) */}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none md:hidden ">
          <div className="relative w-8 h-8 text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-8 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-8 absolute transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </button>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {/* Forced hidden on desktop with md:hidden */}
      <div className={`
        md:hidden absolute left-2 right-2 overflow-hidden transition-all duration-300 ease-in-out bg-white/30 backdrop-blur-md back border-x border-b border-gray-200/20
        ${isOpen 
          ? "max-h-96 opacity-100 p-4 rounded-b-[2rem] translate-y-0" 
          : "max-h-0 opacity-0 p-0 pointer-events-none -translate-y-2"}
      `}>
        <ul className="text-md flex flex-col items-center">
          {nav.map((item) => (
            <li key={item} className="py-2 font-medium text-slate-900 w-full text-center  rounded-xl transition-colors cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <button className=" flex justify-center mt-5 w-full py-3 text-white  bg-slate-900 focus:bg-slate-900/90   font-bold rounded-full shadow-sm active:scale-95 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-4 size-5 relative right-1.5 md:top-0 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          Contact Us
        </button>
      </div>

    </nav>
  );
};

export default Navbar;