

const Courses = () => {
  const courseData = [
    {
      id: "1",
      image: <img src="/mal.jpg" alt="Moroccan Linguistics" className="h-50 w-full rounded-t-2xl" />,
      title: "Moroccan Linguistics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "2",
      image: <img src="/phono.jpg" alt="phono" className="h-50 w-100 rounded-t-2xl"/>,
      title: "Phonology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "3",
      image: <img src="/morpho.jpg" alt="morpho" className="h-50 w-100 rounded-t-2xl" />,
      title: "Morphology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "4",
      image: <img src="/syntax.jpg" alt="syntax" className="h-43 w-100 rounded-t-2xl"/>,
      title: "Syntax",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "5",
      image: <img src="/s&p.jpg" alt="semantics" className="rounded-t-2xl" />,
      title: "Semantics&Pragmatics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },

    {
      id: "6",
      image: <img src="/socio.jpg" alt="socio" className="rounded-t-2xl"/>,
      title: "Sociolinguistic",
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

      <div className="grid md:grid-cols-3 justify-center max-w-5xl w-full gap-4 py-8">
        {courseData.map((card) =>(
          <div key={card.id} className="px-4 md:px-0">
            <div className=" mt-1  p-4 space-y-4 ring rounded-2xl  text-gray-600">
              <div className="" >{card.image}</div>
              <h1 className="text-2xl md:text-xl font-extrabold text-slate-900">{card.title}</h1>
              <p className=" md:text-sm">{card.description}</p>
              
              <div className="flex gap-5">
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 relative top-1 right-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  Monthly
                  </div>
                <span className="font-bold text-green-700">200DH</span>
              </div>
              <div className="w-full bg-gray-600/50 h-[1px] my-5"></div>
              <div className="flex justify-between">
                <div className="pt-1">
                  <span className="h-2 w-2 bg-green-700 inline-block rounded-full "></span>
                  <span className="relative left-2  md:text-sm">Live Sessions</span>
                </div>
                <button class=" text-sm group relative inline-flex px-4 py-2 items-center justify-center overflow-hidden rounded-full bg-orange-400   text-neutral-200 font-bold cursor-pointer  hover:brightness-95 shadow-md shadow-orange-400/30"><span>Register Now</span><div class="ml-1 transition group-hover:translate-x-1 "><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
              </div>

            </div>
            
          </div>
        ))}
      </div>
      

      
      

        

    </div>
  );
};

export default Courses;
