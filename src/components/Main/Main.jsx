import { useEffect, useState } from "react";
import "./Main.css";
import WeatherCard from "components/WeatherCard/WeatherCard";
import ItemCard from "components/ItemCard/ItemCard";
import WeatherApi from "utils/weatherApi";

function Main({ weatherData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const api = new WeatherApi();
    api
      .getDefaultClothing()
      .then(setClothingItems)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="content">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75&deg; F / You may want to wear:
        </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="cards__list">
            {clothingItems
              // .filter(({ weather }) => weather === weatherData.type)
              .map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Main;
