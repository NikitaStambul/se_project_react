import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import "./ItemModal.css";

function ItemModal({ closeModal, item }) {
  const [isVisible, setIsVisible] = useState(false);
  const { name, link, weather } = item;

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
      <div className="modal__container modal__container_preview">
        <img className="modal__image" src={link} alt={name} />
        <button
          className="modal__close"
          type="button"
          onClick={handleClose}
        ></button>
        <div className="modal__footer">
          <h2 className="modal__caption">{name}</h2>
          <p className="modal__weather">Weather: {weather}</p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ItemModal;
