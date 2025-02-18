import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-100 bg-opacity-90   backdrop-filter backdrop-blur-lg  z-50 py-1">
      <div className="container mx-auto flex justify-center items-center px-4 md:px-6">
        {/* Logo */}
        <img src="/logo.png" alt="WP" className="h-8 md:h-10 pr-6" />

        {/* Desktop Menu */}
        <nav className="hidden text-sm md:flex space-x-6">
          {["Home", "Demos", "Properties", "Agents", "Blog", "Contact", "Favorites"].map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </nav>

        {/* User & Mobile Menu Button */}
        <div className="flex items-center pl-9 space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 text-xl">
            <FaUser />
          </a>

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
            <a
              key={item}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
