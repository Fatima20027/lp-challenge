import React from "react";


const Footer = () => {
  return (
    <footer className="py-10 md:text-sm text-gray-700 mt-20" >
      <div className="md:flex justify-between  space-y-5">
        <div className=" space-y-3 w-xs">
          <h1 className="font-semibold text-2xl text-black">Elevora</h1>
          <p>Empowering business leaders with clarity, confidence, and strategic guidance.</p>
        </div>
        <div className="grid-cols-2 grid">
          <div >
            <ul className=" space-y-4 py-1">
              <h2 className="font-semibold text-xl  text-black">Quick Links</h2>
              
              <li>Home</li>
              <li>About</li>
              <li>Programs</li>
              <li>Services</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <ul className=" space-y-4">
              <h2 className="font-semibold text-xl  text-black py-1">Services</h2>
              <li>Business Coaching</li>
              <li>Growth Strategy</li>
              <li>Leadership Development</li>
              <li>Team Performance</li>
              <li>Workshops & Training</li>
            </ul>
          </div>

        </div>
        
        <div>
          <ul className=" space-y-4 py-1">
            <h2 className="font-semibold text-xl  text-black">Contact</h2>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 relative  right-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              beconfidency@gmail.com
              </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 relative  right-1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              1 (000) 123-4567
              </li>
          </ul>
        </div>
      </div>
      <div className="border border-gray-300 w-full mt-5 mb-5"></div>
      <div className="md:flex md:justify-between text-center">
        <p>© 2025 Elevora. All rights reserved.</p>
        <ul className="flex gap-8 justify-center py-5">
          <li className="underline md:visible hidden">Style Guide</li>
          <li className="underline">Privacy Policy</li>
          <li className="underline">Terms & Conditions</li>
        </ul>
      </div>

      
    </footer>
  );
};

export default Footer;
