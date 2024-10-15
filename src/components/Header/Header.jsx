import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "assets/logo.svg";
import AddClothesBtn from "components/AddClothesBtn/AddClothesBtn";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import UserContext from "contexts/UserContext";

function Header({ city }) {
  const { username, avatar } = useContext(UserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="haeder__logo" src={logo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {city}
      </p>
      <ToggleSwitch className="header__toggle" />
      <AddClothesBtn className="header__add-btn">+ Add clothes</AddClothesBtn>
      <Link to="/profile" className="header__user">
        <p className="header__username">{username}</p>
        {avatar ? (
          <img className="header__avatar" src={avatar} alt={username} />
        ) : (
          <div className="header__avatar-placeholder">{username[0]}</div>
        )}
      </Link>
    </header>
  );
}

export default Header;
