import searchLocationEvent from "./dom-events";

const initialDOM = () => {
  const content = document.querySelector("#content");
  content.innerHTML = `

    <div class="header">
        <div class="search-form">
            <div id="error-msg" style="visibility: hidden; color: red;">Invalid Location</div>
            <input type="text" placeholder="Search Location" id="location-search"></input>
            <button id="location-search-btn">Search</button>
        </div>
    </div>

    <div class="subheader">
        <h1 class="name"></h1>
        <h3 class="date-time"></h3>
    </div>

    <div class="current">
        <div class="left">
            <h1 class="current-temp"></h1>
            <h3 class="condition"></h3>
        </div>
        <div class="right">
            <div>
                <h4>Wind Speed</h4>
                <div class="wind-speed"></div>
            </div>
            <div>
                <h4>Feels Like</h4>
                <div class="feels-like"></div>
            </div>
            <div>
                <h4>Humidity</h4>
                <div class="humidity"></div>
            </div>
            <div>
                <h4>Chance of Rain</h4>
                <div class="chance-of-rain"></div>
            </div>
        </div>
    </div>

    <div class="forecast-container">
        <h2>Forecast</h2>
        <div class="forecast">
        
        </div>
    </div>
    
    `;

  searchLocationEvent();
};

export default initialDOM;
