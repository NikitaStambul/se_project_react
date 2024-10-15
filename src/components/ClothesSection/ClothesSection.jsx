import cn from "classnames";
import "./ClothesSection.css";
import { useContext } from "react";
import ClothesContext from "contexts/ClothesContext";
import Skeleton from "components/Skeleton/Skeleton";
import ItemCard from "components/ItemCard/ItemCard";
import AddClothesBtn from "components/AddClothesBtn/AddClothesBtn";

function ClothesSection({ className }) {
  const { clothings, isLoading } = useContext(ClothesContext);

  return (
    <section className={cn("clothes", { [className]: className })}>
      <div className="clothes__header">
        <p className="clothes__caption">Your Items</p>
        <AddClothesBtn className="clothes__add-btn">+ Add new</AddClothesBtn>
      </div>
      {isLoading ? (
        <ul className="clothes__card-list">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <Skeleton />
              </li>
            ))}
        </ul>
      ) : (
        <ul className="clothes__card-list">
          {clothings.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ClothesSection;
