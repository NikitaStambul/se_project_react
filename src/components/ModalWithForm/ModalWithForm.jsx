import { useRef, useState } from "react";
import "./ModalWithForm.css";
import BaseModal from "components/BaseModal/BaseModal";

function ModalWithForm({
  onClose,
  onSubmit,
  children,
  title = "Form",
  submitBtnText = "Submit",
  altBtnEl,
}) {
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const handleChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  return (
    <BaseModal onClose={onClose} className="modal__container_padded">
      <h2 className="modal__title">{title}</h2>
      <form
        className="modal__form"
        ref={formRef}
        onSubmit={onSubmit}
        onChange={handleChange}
        onInput={handleChange}
      >
        {children}
        <div className="modal__form-buttons">
          <button
            className="modal__submit-btn"
            type="submit"
            disabled={!isFormValid}
          >
            {submitBtnText}
          </button>
          {altBtnEl}
        </div>
      </form>
    </BaseModal>
  );
}

export default ModalWithForm;
