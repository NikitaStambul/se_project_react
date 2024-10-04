import { useState } from "react";
import ItemModal from "components/ItemModal";
import "./ItemCard.css";

function ItemCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, link } = item;

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__name">{name}</h2>
      <img className="card__image" src={link} alt={`${name} image`} />
      {isModalOpen && (
        <ItemModal item={item} closeModal={() => setIsModalOpen(false)} />
      )}
    </li>
  );
}

export default ItemCard;
