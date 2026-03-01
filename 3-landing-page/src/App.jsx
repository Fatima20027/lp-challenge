import React from "react";
import Navbar from "./Componenets/Navbar";
import Hero from "./Componenets/Hero";
import About from "./Componenets/About";
import Features from "./Componenets/Features";
import Courses from "./Componenets/Courses";
import Testimonial from "./Componenets/Testimonial";

const App = () => {
  return (
    <div className=" ">
      
      

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg-study.jpg')]  bg-center bg-cover brightness-65"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-yellow-300/20"></div>

        {/* Content */}
        <div className="">
          <Navbar />
          <div className="h-screen">
            <Hero />

          </div>
          
        
        

        </div>
      <About/>
      <Features/>
      <Courses/>
      <Testimonial/>

      

    </div>
  );
};

export default App;
