import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { coordinates, defaultWeatherData } from "utils/constants";
import weatherApi from "utils/weatherApi";
import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import Profile from "components/Profile";

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
        <Routes>
          <Route path="/" element={<Main weatherData={weatherData} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
