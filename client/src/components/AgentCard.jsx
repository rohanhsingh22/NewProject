import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const AgentCard = ({ img, title, listing }) => {
  return (
    <div className="rounded-3xl h-[500px] w-[400px] flex flex-col  mt-5 shadow-lg shadow-gray-400 mb-10  bg-white">
      {/* Image Container */}
      <div className="relative w-full">
        {/* Main Image */}
        <img src={img} alt={title} className="h-[250px] w-[400px] rounded-t-3xl" />
        
        {/* Button Over Image */}
        <button className="absolute bottom-3 left-3 bg-blue-700 text-white text-sm px-4 py-1  shadow-md hover:bg-blue-500">
         Agent
        </button>
      </div>

      {/* Title and Listing Text */}
      <h2 className="text-lg font-semibold mt-3 ml-4">{title}</h2>
      <p className="text-base text-gray-600 ml-4">{listing}</p>

      {/* Extra H1 Tag */}
      <h1 className="text-md font-bold text-gray-800 mt-1 ml-4">Listed Property</h1>

      {/* Small Overlapping Circular Images */}
      <div className="flex items-center mt-2 ml-4">
  {/* Overlapping Circular Images */}
  <div className="flex -space-x-3">
    <img src={img} alt="Avatar1" className="h-10 w-10 rounded-full border-2 border-white" />
    <img src={img} alt="Avatar2" className="h-10 w-10 rounded-full border-2 border-white" />
    <img src={img} alt="Avatar3" className="h-10 w-10 rounded-full border-2 border-white" />
  </div>

  {/* "+5 more" Text */}
  <span className="text-gray-600 text-sm font-semibold ml-3">+5 more</span>
</div>

      {/* Bottom Row - View Contact, Heart & Share Icons */}
      <div className="flex justify-between items-center w-full px-4 mt-4">
        <button className="bg-blue-700 text-white px-28 py-2 rounded-full text-sm shadow-md hover:bg-blue-600">
          View Contact
        </button>
        <FaHeart className="text-gray-400 text-xl cursor-pointer hover:scale-110 transition" />
        <FaShareAlt className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition" />
      </div>
    </div>
  );
};

export default AgentCard;
