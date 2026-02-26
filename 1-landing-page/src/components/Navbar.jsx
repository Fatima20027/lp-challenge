
import React, { useState } from "react";

const arr = ['home', 'about', 'blog', 'contact'];
const res = arr.map(item => item.toUpperCase());
console.log(res)


const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <nav className="flex w-full items-center justify-between py-4 px-12  bg-neutral-900 sticky shadow-amber-50">
      <div className="font-bold text-xl text-neutral-200">Logo</div>

      {/* Search */}
      <div className="relative max-w-md w-full fill-neutral-200 hidden md:block">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute inset-y-0 left-3 my-auto w-4 h-4 text-neutral-200">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


        <input
          type="search"
          placeholder="Search..."
          className="w-full p-2 pl-10 border border-neutral-200 rounded-full  outline-0 focus:ring-1 focus:ring-purple-200 focus:ring-opacity-50 text-neutral-200"
        />
      </div>

      {/* Links */}
      <ul className="  font-medium text-neutral-200 cursor-pointer hidden md:flex">
        <li className="hover:-translate-y-1 transform transition duration-300 mr-10">Home</li>
        <li className="hover:-translate-y-1 transform transition duration-300 mr-10">About</li>
        <li className="hover:-translate-y-1 transform transition duration-300 mr-10">Blog</li>
        <li className="hover:-translate-y-1 transform transition duration-300 mr-10">Contact</li>
      </ul>

       <button
        className="md:hidden text-neutral-200"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

        {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 flex flex-col items-center md:hidden">
          {["Home", "About", "Blog", "Contact"].map(item => (
            <div
              key={item}
              className="py-4 text-neutral-200 w-full text-center hover:bg-neutral-800 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      



    </nav>
  );
};

export default Navbar;
