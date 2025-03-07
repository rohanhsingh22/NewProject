import { useState } from "react";
import SignIn from "./SignIn";
import RegistrationForm from "./RegistrationForm";

const AuthModal = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div>
      {isRegistering ? (
        <RegistrationForm onClose={onClose} onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        <SignIn onClose={onClose} onToggle={() => setIsRegistering(true)} />
      )}
    </div>
  );
};

export default AuthModal;
