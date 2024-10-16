import classNames from "classnames";
import "./Sidebar.css";
import { useContext } from "react";
import UserContext from "contexts/UserContext";

function Sidebar({ className }) {
  const { username, avatar } = useContext(UserContext);

  return (
    <section className={classNames("sidebar", { [className]: className })}>
      <div className="sidebar__user">
        {avatar ? (
          <img className="sidebar__avatar" src={avatar} alt={username} />
        ) : (
          <div className="sidebar__avatar-placeholder">{username[0]}</div>
        )}
        <p className="sidebar__username">{username}</p>
      </div>
    </section>
  );
}

export default Sidebar;
