import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import cn from "classnames";
import "./ModalWithForm.css";

function ModalWithForm({
  closeModal,
  children,
  title = "Form",
  submitBtnText = "Submit",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      setIsVisible(false);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(closeModal, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      handleClose();
    }
  };

  return createPortal(
    <div
      className={cn("modal", { modal__active: isVisible })}
      onClick={handleOverlayClick}
    >
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
