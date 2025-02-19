import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

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
      feedback: "Transformed our idea into reality! Highly recommended.",
      image: "/assets/agents/agent02.webp",
      rating: 5,
    },
    {
      name: "Michael Brown",
      position: "Founder, InnovateHub",
      feedback: "Transformed our idea into reality! Highly recommended.",
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
    <div className="bg-gray-100 py-8 px-4">
      <div className="text-center items-center">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <p className="text-gray-700 pt-4">
          Publish the best of your client testimonials and let the <br /> world
          know what a great agent or real estate agency you are. Testimonials
          build trust
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch py-20 px-12 shadow-xl shadow-gray-400">
        {/* Left Section - Achievements with proper spacing */}
        <div className="flex flex-col items-center md:items-start bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 h-[500px] space-y-6">
          <h2 className="text-2xl font-bold text-gray-800  md:text-left mt-8 items-center ml-40">
            Our Achievements
          </h2>
          <p className="text-gray-600  text-center md:text-left ml-14">
            We have successfully delivered quality projects with excellence.
          </p>
          <div className="grid grid-cols-2 gap-12 ml-14 ">
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
              <h3 className="text-2xl font-bold text-indigo-600">
                React, Node.js
              </h3>
              <p className="text-gray-700">Tech Expertise</p>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonials */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-gray-300 h-[400px]">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-20 h-20 mx-auto rounded-full border-4 border-indigo-400 mt-12"
          />
          <p className="text-lg text-gray-700 mt-4 italic">
            "{testimonials[index].feedback}"
          </p>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[index].position}
          </p>

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
