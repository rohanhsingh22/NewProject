import React, { useRef, useState, useEffect } from "react";
import {
  FaBed,
  FaBath,
  FaCar,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import cards from "./data/cards";

export default function PropertyCarousel() {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, event) => {
    event.stopPropagation(); // Prevent card click when clicking the favorite icon
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth,
        scrollTop,
        scrollHeight,
        clientHeight,
      } = scrollRef.current;
      if (isTabletOrMobile) {
        // Vertical scrolling
        setShowLeftButton(scrollTop > 0);
        setShowRightButton(scrollTop < scrollHeight - clientHeight);
      } else {
        // Horizontal scrolling
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024); // Adjust breakpoint for iPad
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, [isTabletOrMobile]);

  const scrollRight = () => {
    if (scrollRef.current) {
      if (isTabletOrMobile) {
        // Scroll down vertically
        scrollRef.current.scrollBy({ top: 300, behavior: "smooth" });
      } else {
        // Scroll right horizontally
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (isTabletOrMobile) {
        // Scroll up vertically
        scrollRef.current.scrollBy({ top: -300, behavior: "smooth" });
      } else {
        // Scroll left horizontally
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };

  const handleCardClick = (link) => {
    navigate(link); // Navigate to the property details page
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 relative group px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-black">The Hottest Property.</span>
          <span className="text-gray-500"> All-new and heartfelt</span>
        </h2>
      </div>
      {!isTabletOrMobile && showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-10 top-1/2 -translate-y-1/2 p-4 bg-gray-100/30 rounded-full shadow-lg 
                     backdrop-blur-sm hover:bg-gray-300/80 active:bg-gray-400 transition-all duration-100 
                     flex items-center justify-center w-14 h-14 z-10 scale-100 hover:scale-105 opacity-0 group-hover:opacity-100"
        >
          <HiChevronLeft className="text-gray-700 text-4xl font-bold stroke-[1]" />
        </button>
      )}

      {/* Container for Cards */}
      <div
        className={`${
          isTabletOrMobile
            ? "flex flex-col items-center space-y-6 overflow-y-auto scrollbar-hide w-full h-full py-4"
            : "flex space-x-6 overflow-x-auto scrollbar-hide w-full pl-4 pb-4"
        }`}
        ref={scrollRef}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${
              isTabletOrMobile
                ? "w-[90%] max-w-[400px] mx-auto"
                : "min-w-[300px] sm:min-w-[380px] max-w-[300px] sm:max-w-[380px]"
            } rounded-3xl h-[450px] w-[350px] flex flex-col  mt-5 shadow-lg shadow-gray-400 mb-10  bg-white`}
          >
            <div
              className="relative h-64 bg-cover bg-center rounded-t-3xl "
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <span className="absolute top-2 left-2 bg-white text-green-600 text-sm px-3 py-1 rounded-full">
                ● {card.status}
              </span>
              <button
                onClick={(e) => toggleFavorite(card.id, e)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                <FaHeart
                  className={`text-lg ${
                    favorites[card.id] ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="text-gray-500 text-sm">{card.location}</p>
                </div>
                <div className="text-lg font-bold text-blue-600">
                  <p className="text-sm text-black">Property price</p>
                  {card.price}
                </div>
              </div>

              <div className="flex items-center space-x-4 my-3 pt-2 pb-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <FaBed /> <span>{card.details.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBath /> <span>{card.details.baths}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BsFillHouseDoorFill /> <span>{card.details.sqft}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCar /> <span>{card.details.parking}</span>
                </div>
              </div>
              {/* <div className="flex justify-between border border-gray-300 p-2 rounded-lg bg-gray-100 text-black text-sm mt-3">
                <div>
                  <p className="font-semibold">Token price</p>
                  <p className="text-blue-500">{card.financials.tokenPrice}</p>
                </div>
                <div>
                  <p className="font-semibold">Projected IRR</p>
                  <p className="text-blue-500">
                    {card.financials.projectedIRR}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Projected APR</p>
                  <p className="text-blue-500">
                    {card.financials.projectedAPR}
                  </p>
                </div>
              </div> */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    src={card.agent.image}
                    alt="Agent"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-semibold">{card.agent.name}</p>
                    {/* <p className="text-xs text-gray-500">Real Estate Agent</p> */}
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isTabletOrMobile && showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 -translate-y-1/2 p-4 bg-gray-100/30 rounded-full shadow-lg 
                     backdrop-blur-sm hover:bg-gray-300/80 active:bg-gray-400 transition-all duration-100 
                     flex items-center justify-center w-14 h-14 z-10 scale-100 hover:scale-105 opacity-0 group-hover:opacity-100"
        >
          <HiChevronRight className="text-gray-700 text-4xl font-bold stroke-[1]" />
        </button>
      )}

      {isTabletOrMobile && showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute bottom-10 right-10 p-4 bg-gray-100/30 rounded-full shadow-lg 
                     backdrop-blur-sm hover:bg-gray-300/80 active:bg-gray-400 transition-all duration-100 
                     flex items-center justify-center w-14 h-14 z-10 scale-100 hover:scale-105 opacity-0 group-hover:opacity-100"
        >
          <HiChevronRight className="text-gray-700 text-4xl font-bold stroke-[1]" />
        </button>
      )}

      {isTabletOrMobile && showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute bottom-10 left-10 p-4 bg-gray-100/30 rounded-full shadow-lg 
                     backdrop-blur-sm hover:bg-gray-300/80 active:bg-gray-400 transition-all duration-100 
                     flex items-center justify-center w-14 h-14 z-10 scale-100 hover:scale-105 opacity-0 group-hover:opacity-100"
        >
          <HiChevronLeft className="text-gray-700 text-4xl font-bold stroke-[1]" />
        </button>
      )}
    </div>
  );
}
