import { createPortal } from "react-dom";
import cn from "classnames";
import "./ModalWithForm.css";
import { useEffect, useState } from "react";

function ModalWithForm({
  closeModal,
  children,
  title = "Form",
  submitBtnText = "Submit",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  };

  return createPortal(
    <div className={cn("modal", { modal__active: isVisible })}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={handleClose}
        ></button>
        <form className="modal__form">
          {children}
          <button className="modal__submit-btn" type="submit" disabled>
            {submitBtnText}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalWithForm;
