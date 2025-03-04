import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaUserCircle, FaHeart, FaShareAlt } from "react-icons/fa";

const LatestCard = ({ img, title, price, location, beds, baths, size, agent }) => {
  return (
    <div className="w-[350px] bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Image with overlay */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-56 object-cover" />

        {/* Top Right Buttons */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md shadow-md">Sales</button>
          <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-md shadow-md">Active</button>
        </div>

        {/* Bottom Left Location */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md flex items-center space-x-1">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* House Name & Price */}
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-lg font-semibold text-blue-600">{price}</p>

        {/* Short Description */}
        <p className="text-gray-600 mt-1">A beautiful property in {location}.</p>

        {/* Property Details */}
        <div className="flex justify-between items-center mt-3 text-gray-700">
          <div className="flex items-center space-x-2">
            <FaBed />
            <span>{beds} Bed</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath />
            <span>{baths} Bath</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRulerCombined />
            <span>{size}</span>
          </div>
        </div>

        {/* Agent & Icons */}
        <div className="flex justify-between items-center mt-4 border-t pt-3">
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-gray-600 text-2xl" />
            <span className="font-semibold">{agent}</span>
          </div>
          <div className="flex space-x-3 text-gray-500">
            <FaHeart className="cursor-pointer hover:text-red-500" />
            <FaShareAlt className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
