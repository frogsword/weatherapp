import getWeather from "./api-functions";

const searchLocationEvent = () => {
  const locationSearchInput = document.querySelector("#location-search");
  const locationSearchBtn = document.querySelector("#location-search-btn");

  locationSearchBtn.addEventListener("click", () => {
    if (locationSearchInput.value !== "") getWeather(locationSearchInput.value);
    locationSearchInput.value = "";
  });

  locationSearchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      locationSearchBtn.click();
    }
  });

  getWeather("bucharest");
};

export default searchLocationEvent;
