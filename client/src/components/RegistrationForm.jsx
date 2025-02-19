// import { useState } from 'react';
// import InputField from '../components/InputField';
// import PasswordField from '../components/PasswordField';
// import SelectField from '../components/SelectField';
// import CheckboxField from '../components/CheckBoxField';
// import PropTypes from "prop-types";

// const RegistrationForm = ({ onBackToLogin, onClose }) => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     retypePassword: '',
//     userType: '',
//     termsAccepted: false,
//   });

//   const handleTogglePassword = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white w-[90%] sm:w-[400px] p-6 rounded-lg shadow-lg relative">
//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
//           ✖
//         </button>

//         {/* Form Title */}
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Create an account</h2>

//         {/* Registration Form */}
//         <form>
//           {/* Username Field */}
//           <InputField
//             label="Username"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           {/* Email Field */}
//           <InputField
//             label="Email"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           {/* Phone Number Field */}
//           <InputField
//             label="Phone Number"
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           {/* Password Field */}
//           <PasswordField
//             label="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             visible={passwordVisible}
//             onToggleVisibility={handleTogglePassword}
//             required
//           />

//           {/* Retype Password Field */}
//           <PasswordField
//             label="Retype Password"
//             name="retypePassword"
//             value={formData.retypePassword}
//             onChange={handleChange}
//             visible={retypePasswordVisible}
//             onToggleVisibility={() => setRetypePasswordVisible(!retypePasswordVisible)}
//             required
//           />

//           {/* Select User Type */}
//           <SelectField
//             label="Select User Type"
//             name="userType"
//             value={formData.userType}
//             onChange={handleChange}
//             options={[
//               { value: 'user', label: 'User' },
//               { value: 'agent', label: 'Agent' },
//               { value: 'builder', label: 'Builder' },
//               { value: 'agency', label: 'Agency' },
//             ]}
//             required
//           />

//           {/* Terms and Conditions */}
//           <CheckboxField
//             label="I agree with terms & conditions"
//             name="termsAccepted"
//             checked={formData.termsAccepted}
//             onChange={handleChange}
//             required
//           />

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//             Register
//           </button>
//         </form>

//         {/* Footer Links */}
//         <div className="flex justify-between mt-4">
//           <button className="text-sm text-blue-500 hover:underline" onClick={onBackToLogin}>
//             Back to login
//           </button>
//           <button className="text-sm text-blue-500 hover:underline">Forgot password?</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// RegistrationForm.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   onBackToLogin: PropTypes.func.isRequired,
// };

// export default RegistrationForm;
