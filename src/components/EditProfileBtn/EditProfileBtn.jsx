import classNames from "classnames";
import "./EditProfileBtn.css";
import { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function EditProfileBtn({ className, children }) {
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
        className={classNames("edith-profile-btn", { [className]: className })}
        onClick={handleAddBtnClick}
      >
        {children}
      </button>
      {isModalOpened && <EditProfileModal onClose={handleModalClose} />}
    </>
  );
}

export default EditProfileBtn;
