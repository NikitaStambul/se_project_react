import "./ModalWithForm.css";
import BaseModal from "components/BaseModal";

function ModalWithForm({
  closeModal,
  children,
  title = "Form",
  submitBtnText = "Submit",
}) {
  return (
    <BaseModal closeModal={closeModal} className="modal__container_padded">
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form">
        {children}
        <button className="modal__submit-btn" type="submit" disabled>
          {submitBtnText}
        </button>
      </form>
    </BaseModal>
  );
}

export default ModalWithForm;
