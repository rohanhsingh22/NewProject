import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaCar,
  FaRuler,
  FaBuilding,
  FaFilePdf,
} from "react-icons/fa";
import cards from "../components/data/cards";
import property1 from "../../assets/Property/property1.jpg";
import property2 from "../../assets/Property/property2.jpg";
import property5 from "../../assets/Property/property5.jpg";
import property6 from "../../assets/Property/property6.jpg";
import property7 from "../../assets/Property/property7.jpg";
import Dropdown from "../components/Dropdown";

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

      {/* Description Section */}
      <div className="pt-4">
        <Dropdown title="Description">
          <p>
            Sesame Street international co-productions are educational
            children’s television series based on the American Sesame Street but
            tailored to the countries in which they are produced. Shortly after
            the debut of Sesame Street in the US in 1969, television producers,
            teachers, and officials of several countries approached the show’s
            producers and the executives of Children’s Television Workshop (CTW)
            about the possibility of airing international versions of Sesame
            Street. Creator Joan Ganz Cooney hired former CBS executive Michael
            Dann to field offers to produce versions of the show in other
            countries.
          </p>
        </Dropdown>
      </div>

      {/* Documents Section */}
      <div className="pt-4">
        <Dropdown title="Documents">
          <div className="space-y-2">
            <div className="flex items-center">
              <FaFilePdf className="mr-2 text-gray-600" /> {/* PDF icon */}
              <p className="text-gray-600">Energetic-Certificate-PDF10</p>
            </div>
            <div className="flex items-center">
              <FaFilePdf className="mr-2 text-gray-600" /> {/* PDF icon */}
              <p className="text-gray-600">Another-PDF-Sample10</p>
            </div>
          </div>
        </Dropdown>
      </div>
      <div className="pt-4">
        <Dropdown title="Address">
          <div className="space-y-4 mt-2">
            {/* First Row: Street, City, Area */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">Address:</span>
                <span className="font-medium">{property.address.street}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">City:</span>
                <span className="font-medium">{property.address.city}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">Area:</span>
                <span className="font-medium">{property.address.area}</span>
              </div>
            </div>

            {/* Second Row: State/County, Zip, Country */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">State/County:</span>
                <span className="font-medium">{property.address.state}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">Zip:</span>
                <span className="font-medium">{property.address.zip}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-600">Country:</span>
                <span className="font-medium">{property.address.country}</span>
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
      <div className="pt-4">
        <Dropdown title="Details">
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col space-y-1">
              <span className="text-gray-600">Property Id:</span>
              <span className="font-medium">{property.details.propertyId}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-gray-600">Property Lot Size:</span>
              <span className="font-medium">{property.details.lotSize}</span>
            </div>
            {/* Add more fields as needed */}
          </div>
        </Dropdown>
      </div>
      <div className="pt-4">
        <Dropdown title="Features">
          <div className="space-y-4 mt-2">
            {/* Interior Details */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                Interior Details
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {property.features.interiorDetails.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-600">✔</span>{" "}
                    {/* Checkmark icon */}
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outdoor Details */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">
                Outdoor Details
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {property.features.outdoorDetails.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-600">✔</span>{" "}
                    {/* Checkmark icon */}
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utilities */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Utilities</h3>
              <div className="grid grid-cols-3 gap-2">
                {property.features.utilities.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-600">✔</span>{" "}
                    {/* Checkmark icon */}
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Features */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Other Features</h3>
              <div className="grid grid-cols-3 gap-2">
                {property.features.otherFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-600">✔</span>{" "}
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default PropertyDetail;
