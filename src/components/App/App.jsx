import { useEffect, useState } from "react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import "./App.css";
import weatherApi from "#/utils/weatherApi";
import { coordinates, defaultWeatherData } from "#/utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  useEffect(() => {
    weatherApi
      .getWeather(coordinates, import.meta.env.VITE_WEATHER_API_KEY)
      .then(setWeatherData)
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header city={weatherData.city} />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
