import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-white w-[748px] p-4 transition-all duration-300"
      style={{ height: isOpen ? "auto" : "64px", overflow: "hidden" }}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg">{title}</h1>
        <button onClick={toggleDropdown} className="focus:outline-none">
          <FaChevronDown
            className={`w-6 h-6 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Dropdown;