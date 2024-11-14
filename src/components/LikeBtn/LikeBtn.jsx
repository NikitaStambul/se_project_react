import classNames from "classnames";
import "./LikeBtn.css";
import { useContext, useState } from "react";
import CurrentUserContext from "#/contexts/CurrentUserContext";
import itemsApi from "#/utils/itemsApi";

function LikeBtn({ item }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    item.likes.includes(currentUser._id ?? false)
  );

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (isLiked) {
      itemsApi
        .unlike(item._id)
        .then(() => {
          setIsLiked(false);
        })
        .catch(console.error);
    } else {
      itemsApi
        .like(item._id)
        .then(() => {
          setIsLiked(true);
        })
        .catch(console.error);
    }
  };

  return (
    <button className="like-btn" onClick={handleLikeClick}>
      <svg
        className={classNames("like-btn__icon", { like_active: isLiked })}
        width="20"
        height="18"
        viewBox="0 0 20 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 16L2.365 8.67C1.756 8.085 1.35 7.405 1.147 6.63C0.949 5.855 0.951 5.085 1.154 4.32C1.357 3.549 1.761 2.879 2.365 2.309C2.984 1.724 3.69 1.336 4.482 1.146C5.279 0.951 6.074 0.951 6.866 1.146C7.664 1.341 8.372 1.729 8.991 2.309L10 3.25L11.011 2.309C11.635 1.729 12.343 1.341 13.136 1.146C13.928 0.951 14.72 0.951 15.513 1.146C16.31 1.336 17.018 1.724 17.637 2.309C18.241 2.879 18.645 3.549 18.848 4.32C19.051 5.085 19.051 5.855 18.848 6.63C18.65 7.405 18.246 8.085 17.637 8.67L10 16Z" />
      </svg>
    </button>
  );
}

export default LikeBtn;
