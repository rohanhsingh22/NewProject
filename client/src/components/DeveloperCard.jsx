import React, { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import builder from "../components/data/cards";
import cards from "../components/data/cards"; // Import the cards data
import projectImage from "../../assets/agents/image 3.png"; // Use the same image for all cards

export default function Builderdata() {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [showAllUpcomingProjects, setShowAllUpcomingProjects] = useState(false);
  const [showAllCompletedProjects, setShowAllCompletedProjects] = useState(false);

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

  const toggleAllUpcomingProjects = () => {
    setShowAllUpcomingProjects(!showAllUpcomingProjects);
  };

  const toggleAllCompletedProjects = () => {
    setShowAllCompletedProjects(!showAllCompletedProjects);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-100 relative group">
      {/* Heading */}
      <div className="w-full pl-4 mb-8">
        <h2 className="mt-4 text-3xl font-bold text-gray-800">Developers</h2>
        <h2 className="mt-6 text-xl text-gray-400">
          With the “list agents” shortcode, you can show your agents on any page
          alongside their contact details and a link to their profile.
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
        {builder.map((builder) => (
          <div
            key={builder.id}
            className={`${
              isTabletOrMobile
                ? "w-[90%] max-w-[400px] mx-auto"
                : "min-w-[300px] sm:min-w-[380px] max-w-[300px] sm:max-w-[380px]"
            } bg-white shadow-lg rounded-2xl p-4 transform transition duration-600 hover:scale-101 hover:shadow-2xl flex-shrink-0`}
          >
            <div
              className="relative h-36 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${projectImage})` }} // Use the same image for all cards
            >
              {/* Optional: Add overlay or badges here */}
            </div>
            <div className="mt-4">
              <p className="text-2xl text-black-600 font-medium">Real Estate</p>
              <p className="text-sm text-grey-300">
                Real estate development, or property development, is a business
                process, encompassing activities that range from the renovation.
              </p>
            </div>

            {/* Upcoming Projects Section */}
            <div className="mt-4">
              <h2 className="text-xl font-medium mb-4">Our Upcoming Projects</h2>
              <div className="flex flex-wrap gap-1">
                {cards.slice(0, 3).map((card) => (
                  <div
                    key={card.id}
                    className="h-12 w-12 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div
                      className="h-12 w-12 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${card.image})`, // Use the image from cards.jsx
                      }}
                    ></div>
                  </div>
                ))}
                {cards.length > 3 && (
                  <button
                    onClick={toggleAllUpcomingProjects}
                    className="h-12 flex items-center justify-center transform transition duration-300 hover:scale-105"
                  >
                    <span className="text-blue-500 font-semibold">{`+${
                      cards.length - 3
                    } Projects`}</span>
                  </button>
                )}
              </div>

              {/* Display remaining projects when showAllUpcomingProjects is true */}
              {showAllUpcomingProjects && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {cards.slice(3).map((card) => (
                    <div
                      key={card.id}
                      className="h-12 w-12 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div
                        className="h-12 w-12 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${card.image})`, // Use the image from cards.jsx
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Completed Projects Section */}
            <div className="mt-4">
              <h2 className="text-xl font-medium mb-4">Completed Projects</h2>
              <div className="flex flex-wrap gap-1">
                {cards.slice(0, 3).map((card) => (
                  <div
                    key={card.id}
                    className="h-12 w-12 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div
                      className="h-12 w-12 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${card.image})`, // Use the image from cards.jsx
                      }}
                    ></div>
                  </div>
                ))}
                {cards.length > 3 && (
                  <button
                    onClick={toggleAllCompletedProjects}
                    className="h-12 flex items-center justify-center transform transition duration-300 hover:scale-105"
                  >
                    <span className="text-blue-500 font-semibold">{`+${
                      cards.length - 3
                    } Projects`}</span>
                  </button>
                )}
              </div>

              {/* Display remaining projects when showAllCompletedProjects is true */}
              {showAllCompletedProjects && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {cards.slice(3).map((card) => (
                    <div
                      key={card.id}
                      className="h-12 w-12 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div
                        className="h-12 w-12 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${card.image})`, // Use the image from cards.jsx
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* View Details Button */}
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                View Details
              </button>
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