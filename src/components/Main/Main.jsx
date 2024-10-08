import { useContext, useEffect, useState } from "react";
import "./Main.css";
import WeatherCard from "components/WeatherCard";
import ItemCard from "components/ItemCard";
import Skeleton from "components/Skeleton";
import weatherApi from "utils/weatherApi";
import CurrentTemperatureUnitContext from "context/CurrentTemperatureUnitContext";

function Main({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const [isLoading, setIsLoading] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    // mock api request instead taking clothing from constant directly
    weatherApi
      .getClothing()
      .then(setClothingItems)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="content">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        {isLoading ? (
          <ul className="cards__list">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <li key={index}>
                  <Skeleton />
                </li>
              ))}
          </ul>
        ) : (
          <ul className="cards__list">
            {clothingItems
              .filter(({ weather }) => weather === weatherData.type)
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
