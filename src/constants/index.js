const TABS = [
  {
    text: "На 3 дня",
    active: true,
    value: 3,
  },
];
const API_WEATHER = import.meta.env.VITE_API_WEATHER_API;
const URL = `https://api.weatherapi.com/v1/forecast.json?lang=ru&key=${API_WEATHER}`;

export { TABS, URL };
