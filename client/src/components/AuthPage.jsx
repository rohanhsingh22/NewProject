import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {isRegister ? (
          <Register onToggle={() => setIsRegister(false)} />
        ) : (
          <SignIn onToggle={() => setIsRegister(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
