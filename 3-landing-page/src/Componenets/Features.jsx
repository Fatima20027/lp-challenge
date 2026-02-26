
const Features = () => {
  const arr = [
    {
      id: "1",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-orange-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
,
      title: "Sessions of All Modules",
      description: "Complete coverage of S1, S2, S3, and S4 with structured lessons and exam-focused explanations.",


    },

    {
      id: "2",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#45AD30" ><path d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/></svg>,
      title: "Live Online Classes",
      description: "Interactive live classes via Google Meet with real-time explanations and student participation.",


    },

    {
      id: "3",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AD9E30"><path d="M80-40v-80h800v80H80Zm80-120v-240q-33-54-51-114.5T91-638q0-61 15.5-120T143-874q8-21 26-33.5t40-12.5q31 0 53 21t18 50l-11 91q-6 48 8.5 91t43.5 75.5q29 32.5 70 52t89 19.5q60 0 120.5 12.5T706-472q45 23 69.5 58.5T800-326v166H160Zm80-80h480v-86q0-24-12-42.5T674-398q-41-20-95-31t-99-11q-66 0-122.5-27t-96-72.5Q222-585 202-644.5T190-768q-10 30-14.5 64t-4.5 66q0 58 20.5 111.5T240-422v182Zm127-367q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm169.5-56.5Q560-687 560-720t-23.5-56.5Q513-800 480-800t-56.5 23.5Q400-753 400-720t23.5 56.5Q447-640 480-640t56.5-23.5ZM320-160v-37q0-67 46.5-115T480-360h160v80H480q-34 0-57 24.5T400-197v37h-80Zm160-80Zm0-480Z"/></svg>,
      title: "Face-to-Face Sessions",
      description: "On-site sessions in Sidi Maarouf for better engagement and direct teacher interaction.",


    },

    {
      id: "4",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AD3030"><path d="M158-242q-37-50-57.5-110.5T80-480q0-67 20-127t57-110l58 57q-26 38-40.5 83.5T160-480q0 51 14.5 97t40.5 84l-57 57ZM480-80q-67 0-127-20t-110-57l57-58q38 26 83.5 40.5T480-160q51 0 96.5-14.5T660-215l57 58q-50 37-110 57T480-80Zm322-162-57-57q26-38 40.5-84t14.5-97q0-51-14.5-96.5T745-660l58-57q37 50 57 110t20 127q0 67-20.5 127.5T802-242ZM299-745l-57-57q50-37 110.5-57.5T480-880q68 0 128 20.5T718-802l-57 57q-38-26-84-40.5T480-800q-51 0-97 14.5T299-745Zm181 465q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Z"/></svg>,
      title: "Recorded Lessons",
      description: "Access high-quality recorded lectures anytime for flexible revision and self-paced learning.",


    },

    {
      id: "5",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#306AAD"><path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-720h200-200Zm-200 0h480-480Z"/></svg>,
      title: "Personal Notes & Summaries",
      description: "Simplified notes and summaries designed to help you revise faster and understand better.",


    },

    {
      id: "6",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#30AD3F"><path d="M392-380h64l32-92h146l32 92h62L592-740h-64L392-380Zm114-144 52-150h4l52 150H506ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>,
      title: "Exam Preparation",
      description: "Focused revision sessions, exercises, and tips to help you succeed in your university exams.",


    },
  ]
  return (
    <div className=" flex flex-col justify-center items-center mt-10 text-slate-900">
      <div className=" flex gap-8">
        <div className="h-2 w-2 bg-orange-300 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 relative bottom-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-shadow-black">Features</h1>

        
      </div>

      <div>
        {arr.map((item) =>(
          <div key={item.id} className="">
            <div className="bg-orange-50 mt-1">
              <div >{item.icon}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>

            </div>
            
          </div>
        ))}
      </div>
      

      
      

        

    </div>
  );
};

export default Features;
