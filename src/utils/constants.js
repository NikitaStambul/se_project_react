export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = { lat: 34.182049, lon: -118.30748 };

export const defaultWeatherData = {
  type: "hot",
  city: "Unknown",
  temp: { F: 999, C: 999 },
  isDay: true,
  condition: "clear",
};

export const weatherCardsImages = {
  day: {
    clear: new URL("assets/weather/day/clear.svg", import.meta.url).href,
    cloudy: new URL("assets/weather/day/cloudy.svg", import.meta.url).href,
    fog: new URL("assets/weather/day/fog.svg", import.meta.url).href,
    rain: new URL("assets/weather/day/rain.svg", import.meta.url).href,
    snow: new URL("assets/weather/day/snow.svg", import.meta.url).href,
    storm: new URL("assets/weather/day/storm.svg", import.meta.url).href,
    default: new URL("assets/weather/day/default.svg", import.meta.url).href,
  },
  night: {
    clear: new URL("assets/weather/night/clear.svg", import.meta.url).href,
    cloudy: new URL("assets/weather/night/cloudy.svg", import.meta.url).href,
    fog: new URL("assets/weather/night/fog.svg", import.meta.url).href,
    rain: new URL("assets/weather/night/rain.svg", import.meta.url).href,
    snow: new URL("assets/weather/night/snow.svg", import.meta.url).href,
    storm: new URL("assets/weather/night/storm.svg", import.meta.url).href,
    default: new URL("assets/weather/night/default.svg", import.meta.url).href,
  },
};
