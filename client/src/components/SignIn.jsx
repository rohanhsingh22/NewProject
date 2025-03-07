import { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons

const SignIn = ({ onClose , onToggle }) => {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Track registration form state

  const handleSwitchToRegister = () => {
    setIsRegisterOpen(true); // Open the registration form
  };

  const handleCloseRegistration = () => {
    setIsRegisterOpen(false);
    onClose(); // Close the entire modal
  };

  return (
    <>
    <div className="fixed inset-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-3xl flex rounded-lg shadow-lg relative overflow-hidden">
      <div className="w-1/2 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
          aria-label="Close"
        >
          <FaTimes className="w-5 h-5" /> {/* Close Icon */}
        </button>
        

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Sign into your account
        </h2>

        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 text-lg"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye Icon */}
              </button>
              <p className="text-xs text-right mt-1 cursor-pointer text-blue-700 hover:underline">
                Forget Password?
              </p>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">or</p>

        {/* Social Login Buttons */}
        <div className="space-y-2 mt-4">
          <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <span>Login with Facebook</span>
          </button>

          <button className="w-full text-black py-2 px-4 rounded-md flex items-center justify-center space-x-2 border hover:border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M21.805 10.023h-9.562v3.945h5.545c-.235 1.394-.942 2.574-2.01 3.358v2.788h3.245c1.897-1.748 2.982-4.321 2.982-7.143 0-.656-.061-1.296-.2-1.948z"
                fill="#4285F4"
              />
              <path
                d="M12.243 21.799c2.694 0 4.951-.885 6.601-2.41l-3.245-2.788c-.896.603-2.04.955-3.356.955-2.581 0-4.762-1.74-5.543-4.085h-3.388v2.567c1.653 3.253 5.058 5.761 9.131 5.761z"
                fill="#34A853"
              />
              <path
                d="M6.7 13.471a5.917 5.917 0 0 1-.3-1.899c0-.658.108-1.298.3-1.9v-2.567H3.31A9.576 9.576 0 0 0 2 11.572c0 1.507.364 2.934 1.31 4.199l3.39-2.568z"
                fill="#FBBC05"
              />
              <path
                d="M12.243 6.596c1.465 0 2.78.505 3.81 1.492l2.844-2.843C16.855 3.247 14.605 2.199 12.243 2.199 8.17 2.199 4.764 4.707 3.11 7.96l3.388 2.566c.78-2.344 2.961-4.085 5.544-4.085z"
                fill="#EA4335"
              />
            </svg>
            <span>Login with Google</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don.t have an account?{" "}
          <span onClick={onToggle} className="text-blue-700 cursor-pointer hover:underline">
            Register Now
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
    </>
  );
};

SignIn.propTypes = {
  onClose: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default SignIn;
