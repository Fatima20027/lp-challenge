
const Courses = () => {
  const courseData = [
    {
      id: "1",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "2",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "3",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "4",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "5",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "6",
      image: "",
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
  ]
  return (
    <div className=" flex flex-col  justify-center items-center mt-10 text-slate-900">
      <div className=" flex gap-8">
        <div className="h-2 w-2 bg-orange-300 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative bottom-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-shadow-black">Top Courses</h1>

        
      </div>

      <div className="grid md:grid-cols-3 justify-center max-w-5xl w-full gap-2 py-8">
        {courseData.map((card) =>(
          <div key={card.id} className="px-4 md:px-0">
            <div className="bg-orange-50 mt-1 py-5 px-2.5 space-y-4 transform transition scale-98 hover:scale-100  duration-300">
              <div >{card.icon}</div>
              <div className="text-2xl md:text-xl font-extrabold ">{card.title}</div>
              <div className="text-gray-600 md:text-sm">{card.description}</div>

            </div>
            
          </div>
        ))}
      </div>
      

      
      

        

    </div>
  );
};

export default Courses;
