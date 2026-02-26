import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Testimony from "./components/Testimony";
import Transform from "./components/Transform";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 py-3 min-h-screen font-medium scroll-smooth px-3">

      <div className="md:px-15 px-2 sticky z-50 top-2">
        <Navbar />
      </div>

      
      <Hero />
      

    
      <Cards />
    

      {/* Full width — no padding */}
      <Testimony />

      <div className="md:px-15">
        <Transform />
        <Footer/>
      </div>

    </div>
  );
};

export default App;
