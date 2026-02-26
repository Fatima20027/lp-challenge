
const About = () => {
  
  return (
    
    <div className="flex flex-col justify-center items-center mt-5 text-slate-900">
      <div className=" flex gap-8">
        <div className="h-2 w-2 bg-orange-300 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative bottom-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-shadow-black">About Us</h1>

        
      </div>

      <div className="md:flex gap-2 py-8">
          <div className="w-sm  ring-1 space-y-5 p-5 rounded-2xl mb-2">
            <p className="text-orange-400 font-semibold md:text-md text-xl">Why Choose Us</p>
            <h1 className=" text-6xl md:text-5xl font-bold">About Our Linguistic Courses</h1>
            <p className="md:text-xs w-75 pt-30 text-gray-600">Our platform provides high-quality linguistic courses designed for university students who want to deeply understand linguistics and succeed academically. We focus on clarity, simplicity, and effective learning methods to make complex linguistic concepts easy and accessible.
              Under the guidance of Professor Adil El Rhomry, we offer structured lessons, interactive live sessions, recorded classes, and exclusive study materials that help students master syntax, morphology, semantics, pragmatics, phonology, and phonetics.</p>
          </div>
          <div>
            <img src="/image-men-in-meeting.jpg" alt="image" className="md:w-85 md:h-85 w-96 h-95 rounded-2xl ring-1"/>
            <div className="grid grid-cols-2 gap-2 px-3 py-6  ring-1 mt-2 rounded-2xl">
              <div className="bg-gray-200 p-3 rounded-2xl">
                <h1 className="font-extrabold text-xl">3.5</h1>
                <p className="text-sm">Years Experince</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-2xl">
                <h1 className="font-extrabold text-xl">830+</h1>
                <p className="text-sm">Positive Reviews</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-2xl">
                <h1 className="font-extrabold text-xl">100k</h1>
                <p className="text-sm">Trusted Students</p>
              </div>
            </div>
          </div>
        </div>

      
      
      
      

    </div>
  );
};

export default About;
