import { useRef, useState } from "react";
import "./ModalWithForm.css";
import BaseModal from "components/BaseModal";

function ModalWithForm({
  onClose,
  onSubmit,
  children,
  title = "Form",
  submitBtnText = "Submit",
}) {
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const handleChange = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    onSubmit(formObject);
  };

  return (
    <BaseModal onClose={onClose} className="modal__container_padded">
      <h2 className="modal__title">{title}</h2>
      <form
        className="modal__form"
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onInput={handleChange}
      >
        {children}
        <button
          className="modal__submit-btn"
          type="submit"
          disabled={!isFormValid}
        >
          {submitBtnText}
        </button>
      </form>
    </BaseModal>
  );
}

export default ModalWithForm;
