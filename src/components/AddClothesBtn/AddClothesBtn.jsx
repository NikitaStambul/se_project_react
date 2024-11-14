import classNames from "classnames";
import "./AddClothesBtn.css";
import { useState } from "react";
import AddItemModal from "components/AddItemModal/AddItemModal";

function AddClothesBtn({ className, children }) {
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
        className={classNames("add-clothes-btn", { [className]: className })}
        onClick={handleAddBtnClick}
      >
        {children}
      </button>
      {isModalOpened && <AddItemModal onClose={handleModalClose} />}
    </>
  );
}

export default AddClothesBtn;
