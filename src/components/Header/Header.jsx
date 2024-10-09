import { useState } from "react";
import "./Header.css";
import logo from "assets/logo.svg";
import avatar from "assets/avatar.svg";
import ToggleSwitch from "components/ToggleSwitch";
import AddItemModal from "components/AddItemModal";

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

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <img className="haeder__logo" src={logo} alt="logo" />
      <p className="header__date-and-location">
        {currentDate}, {city}
      </p>
      <ToggleSwitch className="header__toggle" />
      <button className="header__add-btn" onClick={handleAddBtnClick}>
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username">{username}</p>
        <img className="header__avatar" src={avatar} alt={username} />
      </div>
      {isModalOpen && <AddItemModal onClose={handleModalClose} />}
    </header>
  );
}

export default Header;
