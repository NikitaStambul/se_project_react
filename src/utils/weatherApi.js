import { defaultClothingItems } from "./constants";

class WeatherApi {
  constructor() {
    if (WeatherApi.shared) {
      return WeatherApi.shared;
    }

    this._APIkey = import.meta.env.VITE_WEATHER_API_KEY;
    this._baseUrl = "https://api.openweathermap.org";
    WeatherApi.shared = this;
  }

  getWeather({ lat, lon }) {
    const url = this._generateUrl({ lat, lon });

    return this._request(url).then((data) => {
      const filteredData = {
        city: data.name,
        condition: data.weather[0].main.toLowerCase(),
        weather: this._getWeatherType(data.main.temp),
        temp: {
          F: Math.round(data.main.temp),
          C: Math.round(((data.main.temp - 32) * 5) / 9),
        },
        isDay: this._isDay(data.sys, Date.now()),
      };

      return filteredData;
    });
  }

  getClothing() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(defaultClothingItems);
      }, 1000);
    });
  }

  _getWeatherType(temp) {
    return temp >= 86 ? "hot" : temp >= 66 ? "warm" : "cold";
  }

  _isDay({ sunrise, sunset }, now) {
    return sunrise * 1000 < now && now < sunset * 1000;
  }

  _generateUrl({ lat, lon }) {
    return `${this._baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${this._APIkey}`;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}

export default new WeatherApi();
