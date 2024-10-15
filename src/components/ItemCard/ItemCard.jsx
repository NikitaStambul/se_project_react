import { useState } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import "./ItemCard.css";

function ItemCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, imageUrl } = item;

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <li className="card" onClick={handleCardClick}>
        <h2 className="card__name">{name}</h2>
        <img className="card__image" src={imageUrl} alt={`${name} image`} />
      </li>
      {isModalOpen && (
        <ItemModal item={item} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ItemCard;
