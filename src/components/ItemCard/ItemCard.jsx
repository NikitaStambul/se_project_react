import "./ItemCard.css";

function ItemCard({ item }) {
  const { name, link } = item;

  return (
    <li className="card">
      <h2 className="card__name">{name}</h2>
      <img className="card__image" src={link} alt={`${name} image`} />
    </li>
  );
}

export default ItemCard;
