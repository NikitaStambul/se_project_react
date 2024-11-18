import { useState } from "react";
import "./AuthBtns.css";
import SignUpModal from "../SignUpModal/SignUpModal";
import LogInModal from "../LogInModal/LogInModal";

function AuthBtns() {
  const [modalType, setModalType] = useState(null);

  const handleClose = () => {
    setModalType(null);
  };

  const handleLogInCLick = () => {
    setModalType("login");
  };

  const handleSignUpCLick = () => {
    setModalType("signup");
  };

  return (
    <>
      <div className="auth-btns">
        <button
          onClick={() => setModalType("signup")}
          className="auth-btns__btn"
        >
          Sign Up
        </button>
        <button onClick={handleLogInCLick} className="auth-btns__btn">
          Log In
        </button>
      </div>
      {modalType === "signup" && (
        <SignUpModal onClose={handleClose} onLogInClick={handleLogInCLick} />
      )}
      {modalType === "login" && (
        <LogInModal onClose={handleClose} onSignUpClick={handleSignUpCLick} />
      )}
    </>
  );
}

export default AuthBtns;
