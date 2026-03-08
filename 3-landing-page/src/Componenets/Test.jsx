import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  
  return(
    <>
    <button onClick={() => setCount(count + 1)} >Clicked {count} times</button>
    <button className={` p-4 ${!dark ? "bg-amber-100 text-slate-900" : "bg-slate-900 text-amber-100" }`} onClick={() => setDark(!dark)}>Click Me</button>
    </>
    
  );
}

export default Test;