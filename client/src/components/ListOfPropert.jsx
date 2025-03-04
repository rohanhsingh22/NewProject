import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaChevronDown } from "react-icons/fa";
import LatestCard from "./data/LatestCard";

// Sample card data
const properties = [
  {
    img: "/assets/listing/Listing1.webp",
    title: "Luxury Villa",
    price: "$500,000",
    location: "Mumbai, India",
    beds: 5,
    baths: 3,
    size: "2500 sqft",
    agent: "John Doe",
  },
  {
    img: "/assets/listing/Listing2.webp",
    title: "Modern Apartment",
    price: "$350,000",
    location: "Delhi, India",
    beds: 3,
    baths: 2,
    size: "1800 sqft",
    agent: "Sarah Smith",
  },
  {
    img: "/assets/listing/Listing3.webp",
    title: "Beach House",
    price: "$750,000",
    location: "Goa, India",
    beds: 4,
    baths: 3,
    size: "3000 sqft",
    agent: "Mike Johnson",
  },
  {
    img: "/assets/listing/Listing6.webp",
    title: "Beach House",
    price: "$750,000",
    location: "Goa, India",
    beds: 4,
    baths: 3,
    size: "3000 sqft",
    agent: "Mike Johnson",
  },
  {
    img: "/assets/listing/Listing4.webp",
    title: "Beach House",
    price: "$750,000",
    location: "Goa, India",
    beds: 4,
    baths: 3,
    size: "3000 sqft",
    agent: "Mike Johnson",
  },
  {
    img: "/assets/listing/Listing5.webp",
    title: "Beach House",
    price: "$750,000",
    location: "Goa, India",
    beds: 4,
    baths: 3,
    size: "3000 sqft",
    agent: "Mike Johnson",
  },
];

const ListOfPropert = () => {
  return (
    <div className="mt-16 p-4 mb-20">
      {/* Dark Blue Themed Map */}
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="w-full h-[250px] md:h-[350px] shadow-lg"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
      </MapContainer>

      {/* Property Cards & Sidebar */}
      <div className="flex flex-col lg:flex-row justify-between mt-10">
        {/* Property Listings */}
        <div className="w-full lg:w-2/3 p-4">
          <h1 className="text-2xl font-semibold">Properties listed in Apartments</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {properties.map((property, index) => (
              <LatestCard key={index} {...property} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h2 className="font-bold text-xl">Advanced Search</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sales</button>
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rentals</button>
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Invest</button>
            </div>
            <ul className="mt-4 space-y-2">
              {["Category", "Country", "City", "Area", "Status", "Sales Price"].map((item, index) => (
                <li key={index} className="flex justify-between text-lg py-2 border-b">
                  Property {item} <FaChevronDown />
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              Search Properties
            </button>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-lg mt-6">
            <h2 className="font-bold text-xl">List by Categories</h2>
            <ul className="mt-2 space-y-2">
              {["Apartments (15)", "Condos (1)", "Houses (5)", "Industrial", "Land", "Offices", "Retails", "Villas"].map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-lg mt-6">
            <h2 className="font-bold text-xl">List by Cities</h2>
            <ul className="mt-2 space-y-2">
              {["New york (15)", "Jersey City (1)"].map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-lg mt-6">
            <h2 className="font-bold text-xl">List by Areas</h2>
            <ul className="mt-2 space-y-2">
              {["Bayonne", "Greenville", "Manhattan", "Queens", "The Heigths", "Upper East Side", "West Side", "West Village"].map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfPropert;
