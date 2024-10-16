import classNames from "classnames";
import "./AddClothesBtn.css";
import { useState } from "react";
import AddItemModal from "components/AddItemModal/AddItemModal";

function AddClothesBtn({ className, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBtnClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className={classNames("add-clothes-btn", { [className]: className })}
        onClick={handleAddBtnClick}
      >
        {children}
      </button>
      {isModalOpen && <AddItemModal onClose={handleModalClose} />}
    </>
  );
}

export default AddClothesBtn;
