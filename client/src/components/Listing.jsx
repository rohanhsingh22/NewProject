import React, { useRef } from "react";
import Card from "./Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const listings = [
  { img: "/assets/listing/Listing1.webp", text: "25 listings" },
  { img: "/assets/listing/Listing2.webp", text: "52 listings" },
  { img: "/assets/listing/Listing3.webp", text: "55 listings" },
  { img: "/assets/listing/Listing4.webp", text: "85 listings" },
  { img: "/assets/listing/Listing5.webp", text: "30 listings" },
  { img: "/assets/listing/Listing6.webp", text: "40 listings" },
  { img: "/assets/listing/Listing1.webp", text: "25 listings" },
  { img: "/assets/listing/Listing2.webp", text: "52 listings" },
  { img: "/assets/listing/Listing3.webp", text: "55 listings" },
  { img: "/assets/listing/Listing4.webp", text: "85 listings" },
  { img: "/assets/listing/Listing5.webp", text: "30 listings" },
  { img: "/assets/listing/Listing6.webp", text: "40 listings" },
];

const Listing = () => {
  const scrollRef = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * (window.innerWidth < 640 ? 0.5 : 0.8); // 50% scroll on mobile, 80% on larger screens

      scrollRef.current.scrollTo({
        left:
          direction === "right"
            ? scrollLeft + scrollAmount
            : scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 sm:px-6 pt-14 bg-gray-100 min-h-[60vh]">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold">
        Explore Our Listings
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Display your properties by category, city, or area
      </p>

      {/* Scrollable Card Section */}
      <div className="relative mt-6 flex items-center ml-24">
        {/* Left Arrow Button */}

        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-4 bg-white text-black p-2 sm:p-3 rounded-full shadow-lg z-10 border-2"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar px-2 space-x-4 sm:space-x-6"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Cards with Dynamic Text */}
          {listings.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[80vw] sm:w-[250px]">
              <Card
                img={item.img}
                title={`Sample Card ${index + 1}`}
                listing={item.text}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-4 bg-white text-black p-2 sm:p-3 rounded-full shadow-lg z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Listing;
