/* eslint-disable radix */
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from "date-fns";

const displayCurrentInfo = (loc, cond, temp, date, fl, hum, rc, ws, wd) => {
  const location = document.querySelector(".name");
  const condition = document.querySelector(".condition");
  const currentTemp = document.querySelector(".current-temp");
  const dateTime = document.querySelector(".date-time");
  const feelsLike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const rainChance = document.querySelector(".chance-of-rain");
  const windSpeed = document.querySelector(".wind-speed");

  location.textContent = loc;
  condition.textContent = cond;
  currentTemp.textContent = `${temp}°C`;
  dateTime.textContent = format(
    new Date(
      date.slice(0, 4),
      parseInt(date.slice(5, 7)) - 1,
      date.slice(8, 10),
    ),
    "E MMM dd',' yyyy",
  );
  dateTime.textContent += ` | ${date.slice(11, 16)}`;
  feelsLike.textContent = `${fl}°C`;
  humidity.textContent = `${hum}%`;
  rainChance.textContent = `${rc}%`;
  windSpeed.textContent = `${ws} ${wd}`;
};

const displayWeeklyTemps = (days) => {
  const forecast = document.querySelector(".forecast");

  forecast.innerHTML = "";

  days.forEach((day) => {
    forecast.innerHTML += `<div class="day"><div style="color: #2196c4;">${format(
      new Date(
        day.date.slice(0, 4),
        parseInt(day.date.slice(5, 7)) - 1,
        day.date.slice(8, 10),
      ),
      "EEEE",
    )}</div> <div>${day.day.condition.text}</div> <div>Max: ${day.day.maxtemp_c}°C,</div> <div>Min: ${day.day.mintemp_c}°C</div></div>`;
  });
};

export { displayWeeklyTemps, displayCurrentInfo };
