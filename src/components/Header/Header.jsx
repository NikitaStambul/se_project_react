import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "assets/logo.svg";
import AddClothesBtn from "components/AddClothesBtn/AddClothesBtn";
import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import SignUpBtn from "../SignUpBtn/SignUpBtn";
import LogInBtn from "../LogInBtn/LogInBtn";
import CurrentUserContext from "#/contexts/CurrentUserContext";

function Header({ city }) {
  const { currentUser } = useContext(CurrentUserContext);
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
      {currentUser ? (
        <>
          <AddClothesBtn className="header__add-btn">
            + Add clothes
          </AddClothesBtn>
          <Link to="/profile" className="header__user">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                className="header__avatar"
                src={currentUser.avatar}
                alt={currentUser.name}
              />
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser.name[0]}
              </div>
            )}
          </Link>
        </>
      ) : (
        <>
          <SignUpBtn>Sign Up</SignUpBtn>
          <LogInBtn>Log In</LogInBtn>
        </>
      )}
    </header>
  );
}

export default Header;
