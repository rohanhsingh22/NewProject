import { FaBed, FaBath, FaCar, FaHeart, FaShareAlt, FaPhone } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import properties from "./data/properties"; // Sample data

const LatestProperties = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [favorites, setFavorites] = useState({}); // State for favorites

  // Toggle favorite status
  const toggleFavorite = (id, event) => {
    event.stopPropagation(); // Prevent card click when clicking the favorite icon
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Function to handle card click
  const handleCardClick = (link) => {
    navigate(link); // Navigate to the property details page
  };

  return (
    <div className="container bg-gray-100 mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Latest Properties</h2>
        <p className="text-gray-600 mt-2">
          Explore our latest properties and find your dream home.
        </p>
      </div>

      {/* Property Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {properties.slice(0, 8).map((property) => (
          <div
            key={property.id}
            onClick={() => handleCardClick(property.link)}
            className="max-w-sm bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative">
              <img
                src={property.image}
                alt="Property"
                className="w-full h-48 object-cover rounded-lg"
              />
              <span className="absolute top-2 left-2 bg-white text-green-600 text-sm px-3 py-1 rounded-full">
                ● {property.status}
              </span>
              <button
                onClick={(e) => toggleFavorite(property.id, e)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                <FaHeart
                  className={`text-lg ${
                    favorites[property.id] ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h2 className="text-lg font-semibold">{property.name}</h2>
                  <p className="text-gray-500 text-sm">{property.location}</p>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  <p className="text-sm text-black">Property price</p>
                  {property.price}
                </div>
              </div>

              <div className="flex items-center space-x-4 my-3 pt-2 pb-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <FaBed /> <span>{property.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBath /> <span>{property.baths}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsFillHouseDoorFill /> <span>{property.area}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCar /> <span>{property.parking}</span>
                </div>
              </div>
              <div className="flex justify-between border gap-9 border-gray-300 p-3 rounded-lg bg-gray-100 text-black text-sm mt-3">
                <div>
                  <p className="font-semibold ">Token price</p>
                  <p className="text-blue-500">{property.tokenPrice}</p>
                </div>
                <div>
                  <p className="font-semibold">Projected IRR</p>
                  <p className="text-blue-500">{property.projectedIRR}</p>
                </div>
                <div>
                  <p className="font-semibold">Projected APR</p>
                  <p className="text-blue-500">{property.projectedAPR}</p>
                </div>
              </div>

              {/* Agent Profile and Actions */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    src={property.agent.image}
                    alt="Agent"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-semibold">{property.agent.name}</p>
                    <p className="text-xs text-gray-500">Real Estate Agent</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle share functionality
                    }}
                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    <FaShareAlt className="text-lg" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `tel:${property.agent.phone}`;
                    }}
                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  >
                    <FaPhone className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/all-properties")} // Replace with actual route
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default LatestProperties;