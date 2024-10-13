import { useEffect, useState } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";
import UserContext from "./UserContext";
import ClothesContext from "./ClothesContext";
import api from "utils/api";

function Providers({ children }) {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const user = {
    username: "Terrence Tegegne",
    avatar: new URL("assets/avatar.svg", import.meta.url).href,
  };
  const [clothingsIsLoading, setClothingsIsLoading] = useState(false);
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    setClothingsIsLoading(true);

    api
      .getClothing()
      .then((items) => {
        setClothings(items);
      })
      .catch(console.error)
      .finally(() => {
        setClothingsIsLoading(false);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
    >
      <UserContext.Provider value={user}>
        <ClothesContext.Provider
          value={{ clothings, setClothings, isLoading: clothingsIsLoading }}
        >
          {children}
        </ClothesContext.Provider>
      </UserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default Providers;
