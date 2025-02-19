import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import SignIn from "./SignIn"; // Ensure correct import path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for SignIn modal

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 py-1">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <img src="../assets/image.png" alt="WP" className="h-8 md:h-10" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-sm space-x-6">
          {["Home", "Demos", "Properties", "Agents", "Blog", "Contact", "Favorites"].map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </nav>

        {/* User & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Login Icon (Opens SignIn Modal) */}
          <button
            onClick={() => setIsLoginOpen(true)} // Open SignIn form
            className="text-gray-700 hover:text-gray-900 text-xl"
          >
            <FaUser />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 right-0 w-48 bg-white shadow-lg rounded-lg py-2">
          {["Home", "Demos", "Properties", "Agents", "Blog", "Contact", "Favorites"].map((item) => (
            <a key={item} href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* SignIn Modal */}
      {isLoginOpen && <SignIn onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
};

export default Header;