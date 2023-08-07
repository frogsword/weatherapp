const displayWeeklyTemps = (location, region, country, days) => {
  const dailyTemps = document.querySelector(".daily-temps");

  dailyTemps.innerHTML = `${location}, ${region}, ${country}`;

  days.forEach((day) => {
    dailyTemps.innerHTML += `<p>${day.date} - Max: ${day.day.maxtemp_f}, Min: ${day.day.mintemp_f}</p>`;
  });
};

export default displayWeeklyTemps;
