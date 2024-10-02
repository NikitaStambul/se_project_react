import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import "./BaseModal.css";

function BaseModal({ closeModal, children, className }) {
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
      <div className={cn("modal__container", { [className]: className })}>
        {children}
        <button
          className="modal__close"
          type="button"
          onClick={handleClose}
        ></button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default BaseModal;
