import { useState } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";

function Providers({ children }) {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default Providers;
