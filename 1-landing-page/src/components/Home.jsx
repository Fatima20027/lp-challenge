
import React, { useState } from "react";






const Home = () => {
  const arr = ["I'm", "bored", "of", "this"];
  const highlight = "bored"
  

  return (
    <div className="w-full h-h-full p-4  bg-neutral-800">
      {arr.map(item => (
        <div key={item} className={item === highlight ? 'text-red-900 font-bold text-3xl' : 'text-white'}>{item}</div>
      ))}
    </div>
  );
};

export default Home;

