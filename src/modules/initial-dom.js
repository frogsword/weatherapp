const initialDOM = () => {
  const content = document.querySelector("#content");
  content.innerHTML = `
    <form class="search-form">
        <label for="location-search" id="location-search-label" style="color: red;"></label>
        <input type="text" placeholder="Search Location" id="location-search"></input>
        <button id="location-search-btn">Search</button>
    </form>
        <div class="daily-temps"></div>
    `;
};

export default initialDOM;
