import "./ItemModal.css";
import BaseModal from "../BaseModal/BaseModal";

function ItemModal({ closeModal, item }) {
  const { name, link, weather } = item;

  return (
    <BaseModal closeModal={closeModal}>
      <div className="modal__container modal__container_preview">
        <img className="modal__image" src={link} alt={name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{name}</h2>
          <p className="modal__weather">Weather: {weather}</p>
        </div>
      </div>
    </BaseModal>
  );
}

export default ItemModal;
