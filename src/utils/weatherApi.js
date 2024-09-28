import { defaultClothingItems } from "./constants";

class WeatherApi {
  constructor() {}

  getDefaultClothing() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(defaultClothingItems);
      }, 1000);
    });
  }
}

export default WeatherApi;
