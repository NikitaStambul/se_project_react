import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { coordinates, defaultWeatherData } from "utils/constants";
import weatherApi from "utils/weatherApi";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Profile from "components/Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "#/contexts/CurrentUserContext";

function App() {
  const { currentUser, currentUserIsLoading } = useContext(CurrentUserContext);
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  useEffect(() => {
    weatherApi
      .getWeather(coordinates)
      .then(setWeatherData)
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        {currentUserIsLoading ? (
          <></>
        ) : (
          <>
            <Header city={weatherData.city} />
            <Routes>
              <Route path="/" element={<Main weatherData={weatherData} />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={!!currentUser}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
