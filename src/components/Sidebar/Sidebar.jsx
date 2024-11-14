import classNames from "classnames";
import "./Sidebar.css";
import { useContext } from "react";
import CurrentUserContext from "contexts/CurrentUserContext";
import EditProfileBtn from "../EditProfileBtn/EditProfileBtn";

function Sidebar({ className }) {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const {
    currentUser: { name, avatar },
  } = useContext(CurrentUserContext);

  const handleLogOut = () => {
    localStorage.clear("jwt");
    setCurrentUser(null);
  };

  return (
    <section className={classNames("sidebar", { [className]: className })}>
      <div className="sidebar__user">
        {avatar ? (
          <img className="sidebar__avatar" src={avatar} alt={name} />
        ) : (
          <div className="sidebar__avatar-placeholder">{name[0]}</div>
        )}
        <p className="sidebar__username">{name}</p>
      </div>
      <div className="sidebar__actions">
        <EditProfileBtn className="sidebar__action">
          Edit Profile
        </EditProfileBtn>
        <button className="sidebar__action" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
