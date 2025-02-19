// import React, { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       position: "CEO, TechCorp",
//       feedback:
//         "Amazing work! The UI/UX was smooth, and the performance was great.",
//       image: "/assets/agents/agent02.webp",
//       rating: 5,
//     },
//     {
//       name: "Sarah Williams",
//       position: "Product Manager, Startup X",
//       feedback: "Loved working with them! Super professional and skilled team.",
//       image: "/assets/agents/agent05.webp",
//       rating: 4,
//     },
//     {
//       name: "Michael Brown",
//       position: "Founder, InnovateHub",
//       feedback: "Transformed our idea into reality! Highly recommended.",
//       image: "/assets/agents/agent02.webp",
//       rating: 5,
//     },
//     {
//       name: "Michael Brown",
//       position: "Founder, InnovateHub",
//       feedback: "Transformed our idea into reality! Highly recommended.",
//       image: "/assets/agents/agent05.webp",
//       rating: 3,
//     },
//   ];

//   // Auto-switch testimonials every 5 seconds
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-gray-100 py-8 mt-5 px-4">
//       <div className="text-center items-center">
//         <h1 className="text-3xl font-bold">Testimonials</h1>
//         <p className="text-gray-700 pt-4">
//           Publish the best of your client testimonials and let the <br /> world
//           know what a great agent or real estate agency you are. Testimonials
//           build trust
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch pt-6 mt-7 bg-white border-gray-300 h-[550px] ">
//         {/* Left Section - Achievements with proper spacing */}
//         <div className="flex flex-col items-center md:items-start bg-gray-100  rounded-lg shadow-md border-2 border-gray-300 h-[500px] w-[600px] ml-5 ">
//           <h2 className="text-2xl font-bold text-gray-800  md:text-left mt-12 items-center ml-40">
//             Our Achievements
//           </h2>
//           <p className="text-gray-600  text-center md:text-left ml-14">
//             We have successfully delivered quality projects with excellence.
//           </p>
//           <div className="grid grid-cols-2 gap-12 ml-14 ">
//             <div className="bg-white p-4 rounded-lg shadow-md text-center">
//               <h3 className="text-2xl font-bold text-indigo-600">5+</h3>
//               <p className="text-gray-700">Years of Experience</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md text-center">
//               <h3 className="text-2xl font-bold text-indigo-600">50+</h3>
//               <p className="text-gray-700">Projects Completed</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md text-center">
//               <h3 className="text-2xl font-bold text-indigo-600">100+</h3>
//               <p className="text-gray-700">Happy Clients</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md text-center">
//               <h3 className="text-2xl font-bold text-indigo-600">
//                 React, Node.js
//               </h3>
//               <p className="text-gray-700">Tech Expertise</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Testimonials */}
//         <div className="bg-gray-100 rounded-lg shadow-lg text-center border-2 border-gray-300 h-[500px] w-[600px]  ">
//           <img
//             src={testimonials[index].image}
//             alt={testimonials[index].name}
//             className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-400 mt-16"
//           />
//           <p className="text-lg text-gray-700 mt-4 italic">
//             "{testimonials[index].feedback}"
//           </p>
//           <h3 className="mt-4 text-lg font-semibold text-gray-800">
//             {testimonials[index].name}
//           </h3>
//           <p className="text-sm text-gray-500">
//             {testimonials[index].position}
//           </p>

//           {/* Rating Section */}
//           <div className="mt-4">
//             {Array.from({ length: 5 }, (_, i) => (
//               <FaStar
//                 key={i}
//                 className={`inline-block ${
//                   i < testimonials[index].rating
//                     ? "text-yellow-500"
//                     : "text-gray-300"
//                 }`}
//                 size={20}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


import React, { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, TechCorp",
      feedback:
        "Amazing work! The UI/UX was smooth, and the performance was great.",
      image: "/assets/agents/agent02.webp",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      position: "Product Manager, Startup X",
      feedback: "Loved working with them! Super professional and skilled team.",
      image: "/assets/agents/agent05.webp",
      rating: 4,
    },
    {
      name: "Michael Brown",
      position: "Founder, InnovateHub",
      feedback:
        "Transformed our idea into reality! Highly recommended. They really paid attention to every detail and delivered a fantastic product!",
      image: "/assets/agents/agent02.webp",
      rating: 5,
    },
    {
      name: "Emily Davis",
      position: "CTO, FutureTech",
      feedback:
        "Exceptional quality and service. The team exceeded our expectations, and we couldn't be happier with the results!",
      image: "/assets/agents/agent05.webp",
      rating: 3,
    },
  ];

  // Auto-switch testimonials every 5 seconds
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-12 mt-4 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-gray-700 pt-2">
          See what our clients have to say about working with us. <br />
          Their feedback inspires us to keep delivering excellence.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch pt-6 mt-3 bg-white p-6  shadow-lg">
        {/* Left Section - Achievements */}
        <div className="flex flex-col items-center md:items-start bg-gray-100 rounded-lg shadow-md border-2 border-gray-300 p-6 h-[500px]">
          {/* <h2 className="text-2xl font-bold text-gray-800 ">Our Achievements</h2>
          <p className="text-gray-600 mt-3 text-center md:text-left">
            We are proud of our journey in delivering outstanding digital
            solutions and ensuring client success.
          </p> */}
          <div className="flex flex-col items-center justify-center  px-10  h-[500px] text-center">
  <h2 className="text-2xl font-bold text-gray-800">Our Achievements</h2>
  <p className="text-gray-600  max-w-md">
    We are proud of our journey in delivering outstanding digital solutions and ensuring client success.
  </p>
</div>

          <div className="grid grid-cols-2 gap-8 mt-6 w-full">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-indigo-600">5+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-indigo-600">50+</h3>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-indigo-600">100+</h3>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-indigo-600">95%</h3>
              <p className="text-gray-700">Client Satisfaction Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-2">
              <h3 className="text-2xl font-bold text-indigo-600">
                Global Reach
              </h3>
              <p className="text-gray-700">Served Clients Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonials (Fixed Height) */}
        <div className="bg-gray-100 rounded-lg shadow-lg border-2 border-gray-300 p-6 text-center h-[500px] flex flex-col justify-center">
          <FaQuoteLeft className="text-indigo-500 text-3xl mx-auto" />
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-400 mt-6"
          />
          <p
            className="text-lg text-gray-700 mt-4 italic h-[80px] overflow-hidden text-ellipsis px-4"
            style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
          >
            "{testimonials[index].feedback}"
          </p>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-gray-500">{testimonials[index].position}</p>

          {/* Rating Section */}
          <div className="mt-4">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`inline-block ${
                  i < testimonials[index].rating
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                size={20}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

