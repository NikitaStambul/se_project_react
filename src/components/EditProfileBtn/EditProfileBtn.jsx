import classNames from "classnames";
import "./EditProfileBtn.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useModal } from "#/hooks/useModal";

function EditProfileBtn({ className, children }) {
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <>
      <button
        className={classNames("edith-profile-btn", { [className]: className })}
        onClick={openModal}
      >
        {children}
      </button>
      {isModalOpened && <EditProfileModal onClose={closeModal} />}
    </>
  );
}

export default EditProfileBtn;
