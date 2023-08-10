import { displayCurrentInfo, displayWeeklyTemps } from "./dom-manip";

const getWeather = (location) => {
  const key = "1ba36e6775f449c180391923230708";
  const errorMsg = document.querySelector("#error-msg");
  errorMsg.style = "visibility: hidden; color: red;";

  function parseInfo(res) {
    const name = `${res.location.name}, ${res.location.country}`;
    const condition = res.current.condition.text;
    const temp = [res.current.temp_c];
    const localTime = res.location.localtime;
    const feelsLike = [res.current.feelslike_c];
    const { humidity } = res.current;
    const rainChance = res.forecast.forecastday[0].day.daily_chance_of_rain;
    const windSpeed = res.current.wind_kph;
    const windDir = res.current.wind_dir;
    displayCurrentInfo(
      name,
      condition,
      temp,
      localTime,
      feelsLike,
      humidity,
      rainChance,
      windSpeed,
      windDir,
    );
  }

  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`,
    { mode: "cors" },
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayWeeklyTemps(response.forecast.forecastday);
      parseInfo(response);
    })
    .catch(() => {
      errorMsg.style = "visibility: visible; color: red;";
    });
};

export default getWeather;
