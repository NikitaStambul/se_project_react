import { useEffect, useState } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";
import ClothesContext from "./ClothesContext";
import itemsApi from "utils/itemsApi";
import CurrentUserContext from "./CurrentUserContext";
import authApi from "#/utils/authApi";

function Providers({ children }) {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserIsLoading, setCurrentUserIsLoading] = useState(true);
  const [clothingsIsLoading, setClothingsIsLoading] = useState(false);
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    setClothingsIsLoading(true);

    authApi
      .getMyInfo()
      .then((user) => setCurrentUser(user))
      .catch((err) => console.error(err.message))
      .finally(() => {
        setCurrentUserIsLoading(false);
      });

    itemsApi
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
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, currentUserIsLoading }}
    >
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, setCurrentTemperatureUnit }}
      >
        <ClothesContext.Provider
          value={{ clothings, setClothings, isLoading: clothingsIsLoading }}
        >
          {children}
        </ClothesContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default Providers;
