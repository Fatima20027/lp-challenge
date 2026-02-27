import React from "react";



const Hero= () => {
  

  return (
    <div className=" md:text-start text-white font-medium space-y-2 md:w-[30rem] md:translate-x-7  px-2 md:translate-y-10  translate-y-15 ">
        <div className="border border-white p-1 rounded-full w-60 md:w-55 flex gap-2 mb-10 md:mb-5 md:text-sm">
          <img src="/meet.png" alt="icon" className="w-5 h-5" />

          Sessions via Google Meet</div>
        <span className="bg-orange-400 rounded-full px-3 py-1 text-start">Online</span>
        <h1 className="text-7xl md:text-8xl font-extrabold font-['Archivo_Black'] drop-shadow-lg/20">Linguistic Courses</h1>
        <h4 className="font-bold text-3xl md:text-2xl">with Pr. Lucia Moretti</h4>
        <p className="text-base md:text-md w-[20rem] md:w-[30rem]">Register now and try session one <span className="text-orange-400 font-semibold">for free</span>. Plus, sign up today to unlock an exclusive discount on your full enrollment and start saving on your journey!</p>
        
        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-orange-400 px-6  text-neutral-200 font-bold cursor-pointer translate-y-5 hover:brightness-95 shadow-md shadow-orange-300/30"><span>Register Now</span><div class="ml-1 transition group-hover:translate-x-1 "><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
          

      
      
      

    </div>
  )
}

export default Hero
