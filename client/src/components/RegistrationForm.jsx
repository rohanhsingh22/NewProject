import { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationForm = ({ onClose, onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-3xl flex rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-1/2 p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Create your account
          </h2>

          <form>
            {/* Full Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 text-lg"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 text-lg"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <span onClick={onToggle} className="text-blue-700 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </div>

        {/* Right Side - Property Image */}
        <div className="w-1/2 p-10 hidden md:block">
          <img
            src="assets/Property/property8.png"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default RegistrationForm;