import { useContext, useState } from "react";
import "./ItemModal.css";
import DeleteItemModal from "components/DeleteItemModal/DeleteItemModal";
import BaseModal from "components/BaseModal/BaseModal";
import ClothesContext from "contexts/ClothesContext";

function ItemModal({ closeModal, item }) {
  const { setClothings } = useContext(ClothesContext);
  const [deleteModalIsOpened, setDeleteModalIsOpened] = useState(false);
  const { _id, name, imageUrl, weather } = item;

  const handleDeleteClick = () => {
    setDeleteModalIsOpened(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalIsOpened(false);
  };

  const handleItemDelete = () => {
    setClothings((clothings) =>
      clothings.filter((clothing) => clothing._id !== _id)
    );
  };

  return (
    <>
      <BaseModal onClose={closeModal}>
        <div className="modal__container modal__container_preview">
          <img className="modal__image" src={imageUrl} alt={name} />
          <div className="modal__footer">
            <div className="modal__heading">
              <h2 className="modal__caption">{name}</h2>
              <button className="modal__delete-btn" onClick={handleDeleteClick}>
                Delete Item
              </button>
            </div>
            <p className="modal__weather">Weather: {weather}</p>
          </div>
        </div>
      </BaseModal>
      {deleteModalIsOpened && (
        <DeleteItemModal
          onClose={handleDeleteModalClose}
          onDelete={handleItemDelete}
          id={item._id}
        />
      )}
    </>
  );
}

export default ItemModal;
