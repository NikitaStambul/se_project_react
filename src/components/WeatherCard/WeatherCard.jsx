import "./WeatherCard.css";
import { weatherCardsImages } from "#/utils/constants";

function WeatherCard({ weatherData }) {
  const timeOfDay = weatherData.isDay ? "day" : "night";
  const weatherImage =
    weatherCardsImages[timeOfDay][weatherData.condition] ||
    weatherCardsImages[timeOfDay].default;

  console.log(weatherImage)

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}&deg;F</p>
      <img
        src={weatherImage}
        alt={`${weatherData.condition} - ${timeOfDay}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
