import Student from '/student.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testiData = [
    { id: 1, image: Student, name: "Hanaa Narjis", comment: "If you’re not using testimonials, you’re missing out..." },
    { id: 2, image: Student, name: "Hanaa Narjis", comment: "If you’re not using testimonials, you’re missing out..." },
    { id: 3, image: Student, name: "Hanaa Narjis", comment: "If you’re not using testimonials, you’re missing out..." },
    { id: 4, image: Student, name: "Hanaa Narjis", comment: "If you’re not using testimonials, you’re missing out..." },
    { id: 5, image: Student, name: "Hanaa Narjis", comment: "If you’re not using testimonials, you’re missing out..." },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 text-slate-900 mt-10 space-y-4 justify-center items-center flex flex-col">
      <div className=" flex gap-8 ">
        <div className="h-2 w-2 bg-orange-300 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative bottom-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold">Testimonials</h1>

        
      </div>

      {/* Swiper Container */}
      <div className="w-full py-7
      [&_.swiper-button-next]:!text-slate-900
      [&_.swiper-button-prev]:!text-slate-900

        /* 2. Change the size of the arrows (Swiper uses 'after' pseudo-element for the icon) */
        [&_.swiper-button-next:after]:!text-2xl
        [&_.swiper-button-prev:after]:!text-2xl

        /* 3. Optional: Add a background circle to the arrows */
        [&_.swiper-button-next]:!w-7
        [&_.swiper-button-next]:!h-7
         
        
        
        [&_.swiper-button-prev]:!w-7
        [&_.swiper-button-prev]:!h-7

        [&_.swiper-pagination-bullet-active]:!bg-slate-900
        ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            // Responsive breakpoints
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12" // Space for pagination dots
        >
          {testiData.map((testi) => (
            <SwiperSlide key={testi.id} >
              <div className="p-6  rounded-xl   border border-orange-100 flex flex-col items-center text-center h-full bg-orange-50">
                <img 
                  src={testi.image} 
                  alt={testi.name} 
                  className="rounded-full w-20 h-20 object-cover mb-4 border-4 border-orange-100" 
                />
                <h2 className="font-bold text-lg">{testi.name}</h2>
                <p className="text-orange-300 text-sm mb-4 font-medium">S5 Student</p>
                <p className="italic text-slate-600 mb-4">"{testi.comment}"</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F19E39" className="mt-auto">
                  <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM362.5-517.5Q380-535 380-560t-17.5-42.5Q345-620 320-620t-42.5 17.5Q260-585 260-560t17.5 42.5Q295-500 320-500t42.5-17.5Zm360 0Q740-535 740-560t-17.5-42.5Q705-620 680-620t-42.5 17.5Q620-585 620-560t17.5 42.5Q655-500 680-500t42.5-17.5ZM680-560Zm-360 0Z"/>
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;