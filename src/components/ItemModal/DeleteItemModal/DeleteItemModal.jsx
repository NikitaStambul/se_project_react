import "./DeleteItemModal.css";
import api from "utils/api";
import BaseModal from "components/BaseModal";

function DeleteItemModal({ onClose, onDelete, id }) {
  const handleDeleteClick = () => {
    api
      .removeClothing(id)
      .then(onDelete)
      .catch((err) => console.error(err));
  };

  return (
    <BaseModal onClose={onClose} className="delete-modal">
      <p className="delete-modal__caption">
        Are you sure you want to delete this item?
        <br />
        This action is irreversible.
      </p>
      <button
        className="delete-modal__confirmation-btn"
        onClick={handleDeleteClick}
      >
        Yes, delete item
      </button>
      <button className="delete-modal__cancel-btn" onClick={onClose}>
        Cancel
      </button>
    </BaseModal>
  );
}

export default DeleteItemModal;