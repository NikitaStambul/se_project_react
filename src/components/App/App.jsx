import { useState } from "react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
