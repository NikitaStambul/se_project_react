import { useContext, useState } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import "./ItemCard.css";
import LikeBtn from "../LikeBtn/LikeBtn";
import CurrentUserContext from "#/contexts/CurrentUserContext";

function ItemCard({ item }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { name, imageUrl } = item;

  const handleCardClick = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <li className="card" onClick={handleCardClick}>
        <div className="card__heading">
          <h2 className="card__name">{name}</h2>
          {currentUser && <LikeBtn item={item} />}
        </div>
        <img className="card__image" src={imageUrl} alt={`${name} image`} />
      </li>
      {isModalOpened && (
        <ItemModal item={item} closeModal={() => setIsModalOpened(false)} />
      )}
    </>
  );
}

export default ItemCard;
