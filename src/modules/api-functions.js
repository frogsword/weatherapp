import displayWeeklyTemps from "./dom-manip";

const getWeather = () => {
  const key = "1ba36e6775f449c180391923230708";
  const locationSearchLabel = document.querySelector("#location-search-label");
  const locationSearchInput = document.querySelector("#location-search");
  const locationSearchBtn = document.querySelector("#location-search-btn");

  console.log(process.env.API_KEYn);

  function apiCall(location) {
    locationSearchLabel.textContent = "";

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`,
      { mode: "cors" },
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.forecast.forecastday);
        displayWeeklyTemps(
          response.location.name,
          response.location.region,
          response.location.country,
          response.forecast.forecastday,
        );
      })
      .catch(() => {
        locationSearchLabel.value = "Invalid Location";
        locationSearchInput.value = "";
      });
  }

  locationSearchBtn.addEventListener("click", () => {
    apiCall(locationSearchInput.value);
  });

  locationSearchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      locationSearchBtn.click();
    }
  });

  apiCall("bucharest");
};

export default getWeather;
