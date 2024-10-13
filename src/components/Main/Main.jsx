import { useContext } from "react";
import "./Main.css";
import WeatherCard from "components/WeatherCard";
import ItemCard from "components/ItemCard";
import Skeleton from "components/Skeleton";
import CurrentTemperatureUnitContext from "context/CurrentTemperatureUnitContext";
import ClothesContext from "context/ClothesContext";

function Main({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const { isLoading, clothings } = useContext(ClothesContext);

  return (
    <main className="content">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        {isLoading ? (
          <ul className="card__list">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <li key={index}>
                  <Skeleton />
                </li>
              ))}
          </ul>
        ) : (
          <ul className="card__list">
            {clothings
              .filter(({ weather }) => weather === weatherData.weather)
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
