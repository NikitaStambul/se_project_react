import "./WeatherCard.css";
import { weatherCardsImages } from "utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const timeOfDay = weatherData.isDay ? "day" : "night";
  const weatherImage =
    weatherCardsImages[timeOfDay][weatherData.condition] ||
    weatherCardsImages[timeOfDay].default;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </p>
      <img
        src={weatherImage}
        alt={`${weatherData.condition} - ${timeOfDay}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
