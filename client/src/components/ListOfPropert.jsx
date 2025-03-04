// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import LatestCard from "./data/LatestCard";

// const ListOfPropert = () => {
//     return (
//        <div>
//         <div className="flex flex-col  mt-20 bg-gray-100 p-4">

//             {/* Dark Blue Themed Map */}
//             <MapContainer
//                 center={[20.5937, 78.9629]} // Default center (India)
//                 zoom={5}
//                 className="w-full max-w-9xl h-[250px] shadow-lg"
//             >
//                 <TileLayer
//                     url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//                     attribution='&copy; <a href="https://carto.com/">CARTO</a>'
//                 />
//             </MapContainer>
//         </div>
//         <LatestCard/>
//         </div>
//     );
// };

// export default ListOfPropert;


// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { FaChevronDown } from "react-icons/fa";
// import LatestCard from "./data/LatestCard";

// // Sample card data
// const properties = [
//   {
//     img: "/assets/listing/Listing1.webp",
//     title: "Luxury Villa",
//     price: "$500,000",
//     location: "Mumbai, India",
//     beds: 5,
//     baths: 3,
//     size: "2500 sqft",
//     agent: "John Doe",
//   },
//   {
//     img: "/assets/listing/Listing2.webp",
//     title: "Modern Apartment",
//     price: "$350,000",
//     location: "Delhi, India",
//     beds: 3,
//     baths: 2,
//     size: "1800 sqft",
//     agent: "Sarah Smith",
//   },
//   {
//     img: "/assets/listing/Listing3.webp",
//     title: "Beach House",
//     price: "$750,000",
//     location: "Goa, India",
//     beds: 4,
//     baths: 3,
//     size: "3000 sqft",
//     agent: "Mike Johnson",
//   },
//   {
//     img: "/assets/listing/Listing4.webp",
//     title: "Cozy Cottage",
//     price: "$200,000",
//     location: "Shimla, India",
//     beds: 2,
//     baths: 1,
//     size: "1200 sqft",
//     agent: "Emily Davis",
//   },
//   {
//     img: "/assets/listing/Listing5.webp",
//     title: "Penthouse",
//     price: "$900,000",
//     location: "Bangalore, India",
//     beds: 4,
//     baths: 4,
//     size: "3500 sqft",
//     agent: "Chris Brown",
//   },
//   {
//     img: "/assets/listing/Listing6.webp",
//     title: "Farmhouse",
//     price: "$450,000",
//     location: "Punjab, India",
//     beds: 3,
//     baths: 2,
//     size: "2200 sqft",
//     agent: "Sophia Lee",
//   },
// ];

// const ListOfPropert = () => {
//   return (
//     <div className="mt-16 p-4 mb-20">
//       {/* Dark Blue Themed Map */}
//       <MapContainer
//         center={[20.5937, 78.9629]} // Default center (India)
//         zoom={5}
//         className="w-full max-w-9xl h-[250px] shadow-lg"
//       >
//         <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//           attribution='&copy; <a href="https://carto.com/">CARTO</a>'
//         />
//       </MapContainer>

//       {/* Property Cards Grid - 2 Cards per Row */}
//       <div className="flex justify-between mt-20">
//         <div className=" ml-20">
//           <h1 className="text-2xl mt-4 font-semibold">Properties listed in Apartments</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">

//             {properties.map((property, index) => (
//               <LatestCard key={index} {...property} />
//             ))}
//           </div>
//         </div>
//         <div>

//           <div className="bg-white  shadow-lg mr-28 px-16 py-3">
//             <h2 className="font-bold text-xl ">Advanced Search</h2>
//             <div className="mt-2">
//               <button className="hover:bg-blue-200 hover:text-blue-700 px-5 py-2 mx-1  bg-blue-600 text-white">Sales</button>
//               <button className="hover:bg-blue-200 hover:text-blue-700 px-5 py-2 mx-1 bg-blue-600 text-white">Rentals</button>
//               <button className="hover:bg-blue-200 hover:text-blue-700 px-5 py-2 mx-1 bg-blue-600 text-white">Invest</button>
//             </div>
//             <ul className=" mt-2">
//               <li className="flex justify-between py-2 text-xl">Property Category <span className="pt-2">< FaChevronDown /></span></li>
//               <li className="flex justify-between py-2 text-xl">Property Country <span className="pt-2">< FaChevronDown /></span></li>
//               <li className="flex justify-between py-2 text-xl">Property City <span className="pt-2">< FaChevronDown /></span></li>
//               <li className="flex justify-between py-2 text-xl">Property Area <span className="pt-2">< FaChevronDown /></span></li>
//               <li className="flex justify-between py-2 text-xl">Property Status <span className="pt-2">< FaChevronDown /></span></li>
//               <li className="flex justify-between py-2 text-xl">Sales Price <span className="pt-2">< FaChevronDown /></span></li>
//             </ul>

//             <div className="text-center mt-2">
//               <input type="button" value="Search Properties" className="bg-blue-600 text-white py-3 px-20 " />
//             </div>
//             <p className="text-blue-700 my-3">more search options</p>
//           </div>

//           <div className="bg-white  shadow-lg mr-28 px-16 py-3 mt-3">
//             <h2 className="font-bold text-xl ">List by Categories</h2>
//             <ul className=" mt-2">
//               <li  className=" py-2 text-xl">Apartments (15)</li>
//               <li className=" py-2 text-xl">Condos(1)</li>
//               <li className=" py-2 text-xl">Houses(5)</li>
//               <li className=" py-2 text-xl">Industrial</li>
//               <li className=" py-2 text-xl">Land</li>
//               <li className=" py-2 text-xl">Offices</li>
//               <li className=" py-2 text-xl">Retails</li>
//               <li className=" py-2 text-xl">Villas</li>
//             </ul>
//           </div>

//           <div className="bg-white  shadow-lg mr-28 px-16 py-3 mt-3">
//             <h2 className="font-bold text-xl ">List by City</h2>
//             <ul className=" mt-2">
//               <li  className=" py-2 text-xl">New York(15)</li>
//               <li className=" py-2 text-xl">Jersy City(1)</li>
              
//             </ul>
//           </div>

//           <div className="bg-white  shadow-lg mr-28 px-16 py-3 mt-3">
//             <h2 className="font-bold text-xl ">List by Areas</h2>
//             <ul className=" mt-2">
//               <li  className=" py-2 text-xl">Bayonne</li>
//               <li className=" py-2 text-xl">Greenville</li>
//               <li className=" py-2 text-xl">Manhattan</li>
//               <li className=" py-2 text-xl">Queens</li>
//               <li className=" py-2 text-xl">The Heights</li>
//               <li className=" py-2 text-xl">Upper East Side</li>
//               <li className=" py-2 text-xl">West Village</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListOfPropert;



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
