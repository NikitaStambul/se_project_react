import { useState } from "react";
import "./Header.css";
import logo from "assets/logo.svg";
import avatar from "assets/avatar.svg";
import ModalWithForm from "components/ModalWithForm";

function Header({ city }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = "Terrence Tegegne";
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const handleAddBtnClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="header">
      <img className="haeder__logo" src={logo} alt="logo" />
      <p className="header__date-and-location">
        {currentDate}, {city}
      </p>
      <button className="header__add-btn" onClick={handleAddBtnClick}>
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username">{username}</p>
        <img className="header__avatar" src={avatar} alt={username} />
      </div>
      {isModalOpen && (
        <ModalWithForm
          title="New garment"
          submitBtnText="Add garment"
          closeModal={() => setIsModalOpen(false)}
        >
          <label className="modal__label" htmlFor="name">
            Name:{" "}
            <input
              className="modal__input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </label>
          <label className="modal__label" htmlFor="link">
            Image:{" "}
            <input
              className="modal__input"
              type="url"
              name="link"
              id="link"
              placeholder="Image URL"
              required
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="hot"
            >
              <input
                className="modal__radio-input"
                type="radio"
                name="weather"
                id="hot"
                value="hot"
              />
              Hot
            </label>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="warm"
            >
              <input
                className="modal__radio-input"
                type="radio"
                name="weather"
                id="warm"
                value="warm"
              />
              Warm
            </label>
            <label
              className="modal__label modal__label_type_radio"
              htmlFor="cold"
            >
              <input
                className="modal__radio-input"
                type="radio"
                name="weather"
                id="cold"
                value="cold"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      )}
    </header>
  );
}

export default Header;
