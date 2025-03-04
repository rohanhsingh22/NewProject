import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaBed, FaBath, FaCar, FaRuler,FaBuilding } from "react-icons/fa";

import cards from "../components/data/cards";
import property1 from "../../assets/Property/property1.jpg";
import property2 from "../../assets/Property/property2.jpg";
import property5 from "../../assets/Property/property5.jpg";
import property6 from "../../assets/Property/property6.jpg";
import property7 from "../../assets/Property/property7.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const property = cards.find((card) => card.id === parseInt(id));

  if (!property) {
    return <div className="p-4 text-red-500">Property not found!</div>;
  }

  const mainImage = property.image;
  const additionalImages = [
    property1,
    property2,
    property5,
    property6,
    property7,
  ];

  return (
    <div className="bg-gray-200 pt-[60px] pl-6 p-4">
      <div className="flex items-center mb-5">
        <div>
          <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600">{property.location}</p>
        </div>
        <p className="text-2xl font-bold text-blue-600 pl-80 self-center">
          {property.price}
        </p>
      </div>

      {/* Large Image */}
      <div className="mb-6">
        <img
          src={selectedImage || mainImage}
          alt="Selected Property"
          className="w-[750px] h-[450px] object-cover shadow-md ml-25 mt-30"
        />
      </div>

      {/* Small Thumbnail Images */}
      <div className="flex space-x-3">
        {additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-[140px] h-[140px] object-cover cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Overview Section */}
      <div className="pt-4">
        <div className="bg-white w-[748px] h-[151px] p-4">
          <h1 className="font-medium text-lg">Overview</h1>
          <div className="pt-4 flex">
            <div className="flex flex-col">
              <h1 className="font-medium text-lg mb-1">Updates on:</h1>
              <p className="text-sm text-gray-400">{property.updateDate}</p>
            </div>
            <div className="flex items-center space-x-8 pt-2 pl-10 ">
              <div className="items-center">
                <FaBed className="mr-2" />
                <span>{property.details.beds} Bedroom</span>
              </div>
              <div className=" items-center">
                <FaBath className="mr-2" />
                <span>{property.details.baths} Bathroom</span>
              </div>
              <div className="items-center">
                <FaCar className="mr-2" />
                <span>{property.details.parking} Garages</span>
              </div>
              <div className="items-center">
                <FaRuler className="mr-2" />
                <span>{property.details.sqft} Ft</span>
              </div>
              <div className="items-center">
                <FaBuilding className="mr-2" />
                <span>Year Built: {property.yearBuilt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
