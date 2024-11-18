import { useContext } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import "./ItemCard.css";
import LikeBtn from "../LikeBtn/LikeBtn";
import CurrentUserContext from "#/contexts/CurrentUserContext";
import { useModal } from "#/hooks/useModal";

function ItemCard({ item }) {
  const { isModalOpened, closeModal, openModal } = useModal();
  const { currentUser } = useContext(CurrentUserContext);
  const { name, imageUrl } = item;

  return (
    <>
      <li className="card" onClick={openModal}>
        <div className="card__heading">
          <h2 className="card__name">{name}</h2>
          {currentUser && <LikeBtn item={item} />}
        </div>
        <img className="card__image" src={imageUrl} alt={`${name} image`} />
      </li>
      {isModalOpened && <ItemModal item={item} onClose={closeModal} />}
    </>
  );
}

export default ItemCard;
