import classNames from "classnames";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./SignUpBtn.css";
import { useState } from "react";

function SignUpBtn({ className, children }) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleAddBtnClick = () => {
    setIsModalOpened(true);
  };

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <button
        className={classNames("signup-btn", { [className]: className })}
        onClick={handleAddBtnClick}
      >
        {children}
      </button>
      {isModalOpened && <RegisterModal onClose={handleModalClose} />}
    </>
  );
}

export default SignUpBtn;
