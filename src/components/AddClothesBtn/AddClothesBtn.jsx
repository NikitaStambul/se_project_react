import classNames from "classnames";
import "./AddClothesBtn.css";

import AddItemModal from "components/AddItemModal/AddItemModal";
import { useModal } from "#/hooks/useModal";

function AddClothesBtn({ className, children }) {
  const { isModalOpened, openModal, closeModal } = useModal();

  return (
    <>
      <button
        className={classNames("add-clothes-btn", { [className]: className })}
        onClick={openModal}
      >
        {children}
      </button>
      {isModalOpened && <AddItemModal onClose={closeModal} />}
    </>
  );
}

export default AddClothesBtn;
