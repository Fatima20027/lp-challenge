import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const nav = ['Home', 'Courses', 'About', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2  sticky top-0 z-50  px-2">

      <div className="hidden md:flex justify-between bg-orange-100/30 backdrop-blur-md border-gray-200/10  rounded-full p-2 px-10 shadow-xl/30"> 
        <h1 className="text-2xl  text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative top-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          
        </h1>
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
            <FontAwesomeIcon icon={faWhatsapp} className="relative top-1 right-1 " />
      
            Contact Us
        </button>

      </div>
      
      {/* Top Bar */}
      <div className={`md:hidden flex justify-between items-center border border-gray-200/10 backdrop-blur-md p-4 bg-orange-100/30  transition-all duration-300 ${isOpen ? "rounded-t-[2rem]" : "rounded-[2rem]"}`}>
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
        md:hidden absolute left-2 right-2 overflow-hidden transition-all duration-300 ease-in-out bg-orange-100/30 backdrop-blur-md back border-x border-b border-gray-200/20
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
          <FontAwesomeIcon icon={faWhatsapp} className="relative top-1 right-1 " />
          Contact Us
        </button>
      </div>

    </nav>
  );
};

export default Navbar;