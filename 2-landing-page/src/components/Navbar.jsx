import React, { useState } from "react";

const Navbar = () => {
  const nav = ['Home', 'About', 'Programs', 'Blogs', 'Pages'];
  const highlight = 'Programs';
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. Added 'transition-all duration-500 ease-in-out' to the parent nav
    // This makes the rounded corners and height change smooth instead of instant
    <nav className={`w-full bg-white px-6 py-2 shadow-md top-2 z-50 relative transition-all duration-500 ease-in-out ${isOpen ? "rounded-[2rem]" : "rounded-[3rem]"}`}>
      
      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden z-20 relative">
        <h1 className="font-semibold text-2xl">Elevora</h1>
        
        <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
            {/* Added relative positioning to stack icons on top of each other for smooth crossfade */}
            <div className="relative w-6 h-6 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className={`w-6 h-6 absolute transition-all duration-500 transform ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                    className={`w-6 h-6 absolute transition-all duration-500 transform ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </button>
      </div>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden md:grid md:grid-cols-3 items-center">
        <div className="flex justify-start">
          <h1 className="font-semibold text-2xl">Elevora</h1>
        </div>
        <div className="flex justify-center ">
          <ul className="flex flex-row gap-x-8 font-medium text-sm cursor-pointer ">
            {nav.map(item => (
              <li key={item} className={`${item === highlight ? 'text-blue-500' : 'text-black'} flex items-center hover:text-blue-500 duration-300`}>
                {item}
                {item === 'Pages' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-5 py-3 rounded-full text-sm duration-300 hover:bg-blue-400 cursor-pointer flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Book a Call
          </button>
        </div>
      </div>

      {/* 2. SMOOTH DROPDOWN ANIMATION 
         Instead of `hidden`, we use a grid wrapper.
         - When closed: grid-rows-[0fr] (height is 0)
         - When open: grid-rows-[1fr] (height is auto)
         - transition-all handles the animation.
      */}
      <div className={`md:hidden grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0 pt-0"}`}>
        <div className="min-h-0"> {/* Inner container needed for grid animation */}
            <ul className="flex flex-col gap-y-4 font-medium cursor-pointer items-center border-t border-gray-100 pt-4">
            {nav.map(item => (
                <li key={item} className={`${item === highlight ? 'text-blue-500' : 'text-black'} flex items-center hover:text-blue-500 duration-300 py-2`}>
                {item}
                {item === 'Pages' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                )}
                </li>
            ))}
            </ul>
            <button className="w-full bg-blue-500 text-white px-5 py-3 rounded-full text-sm duration-300 hover:bg-blue-400 cursor-pointer flex items-center justify-center mt-6 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Book a Call
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;