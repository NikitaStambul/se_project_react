import classNames from "classnames";
import LogInModal from "../LogInModal/LogInModal";
import "./LogInBtn.css";
import { useState } from "react";

function LogInBtn({ className, children }) {
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
        className={classNames("login-btn", { [className]: className })}
        onClick={handleAddBtnClick}
      >
        {children}
      </button>
      {isModalOpened && <LogInModal onClose={handleModalClose} />}
    </>
  );
}

export default LogInBtn;
