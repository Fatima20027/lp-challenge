import React from "react";
import Blueprint from '../images/Blueprint.jfif';
import Leader from '../images/leader.jpg'
import Growth from "../images/growth.jpg"


const Cards = () => {
  const cardData = [
    {
  id: 1,
  image: Blueprint,
  title: "Business Clarity Blueprint",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "4 Weeks",
    instructor: "Business Strategist",
  },
  buttonText: "Join Program",
},

{
  id: 2,
  image: Growth,
  title: "Strategic Growth Accelerator",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "8 Weeks",
    instructor: "Growth Consultant",
  },
  buttonText: "Enroll Now",
},

{
  id: 3,
  image: Leader,
  title: "Leadership & Performance",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "5 Weeks",
    instructor: "Executive Coach",
  },
  buttonText: "Enroll Now",
},

{
  id: 1,
  image: Blueprint,
  title: "Business Clarity Blueprint",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "4 Weeks",
    instructor: "Business Strategist",
  },
  buttonText: "Join Program",
},

{
  id: 2,
  image: Growth,
  title: "Strategic Growth Accelerator",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "8 Weeks",
    instructor: "Growth Consultant",
  },
  buttonText: "Enroll Now",
},

{
  id: 3,
  image: Leader,
  title: "Leadership & Performance",
  description: "Gain a clear understanding of your business direction.",
  features: {
    duration: "5 Weeks",
    instructor: "Executive Coach",
  },
  buttonText: "Enroll Now",
},




  ]
  return(
    <div className="md:flex  flex-wrap justify-center  md:m-16  md:mt-50 mt-40 gap-x-2 gap-y-7">
      
      {cardData.map(card => (
        <div key={card.id} className="bg-white rounded-xl p-5 space-y-3 md:max-w-sm  w-full shadow-md/5">
          <img src={card.image} alt="image"  className="w-full h-40 rounded-xl "/>
          <h1 className="font-semibold text-lg ">{card.title}</h1>
          <p className="text-xs text-gray-700">{card.description}</p>
          <div className="text-xs text-gray-700 flex gap-4">
            <p className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

              {card.features.duration}
              </p>
            <p className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              {card.features.instructor}
              </p>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex justify-between">
            <span className="text-xs text-gray-700 py-2"><span className="w-2 h-2 inline-block bg-green-700 rounded-full mr-1.5"></span>Live Session</span>
            <button className="bg-white text-blue-500 border-blue-500 border px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white duration-300 cursor-pointer">{card.buttonText}</button>
          </div>
          
        </div>

      ))}

      <div className="border border-gray-300 w-full mt-4 mb-3"></div>
      <div className="flex gap-1 m-auto justify-center">
        <button className="flex text-gray-700 bg-white border-gray-300  border p-2 rounded-sm cursor-pointer hover:bg-gray-50 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>

          Previous
          </button>
        <button className="flex text-black bg-white border-gray-300  border p-2 rounded-sm font-semibold cursor-pointer hover:bg-gray-50 text-sm">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </button>
        
      </div>
      
    </div>
  )
}

export default Cards;