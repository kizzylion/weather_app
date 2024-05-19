import "./style/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { data } from "autoprefixer";
const { format } = require("date-fns");
import { getCurrentLocation } from "./getCurrentLocation";
import { getPositionWeatherData, getCityWeatherData } from "./fetchWeatherData";
import { renderData } from "./renderData";
import { createHomepage } from "./createHomepage";
import { searchCityData } from "./searchCityData";

createHomepage();

let searchForm = document.querySelector("#searchform");
export let searchInput = document.querySelector("#searchform input");
export function showLoadingScreen() {
  document.getElementById("loadingScreen").classList.remove("hidden");
}

// Function to hide the loading screen
export function hideLoadingScreen() {
  document.getElementById("loadingScreen").classList.add("hidden");
}

const currentLocationData = await getCurrentLocation()
  .then((position) => {
    console.log("Position:", position);
    return getPositionWeatherData(position);
    // You can use the location data here
  })
  .catch((error) => {
    console.error("Error fetching location:", error);
    // Handle errors here
  });
console.log(currentLocationData);

const defaultLocationData = await getCityWeatherData("London");
console.log(defaultLocationData);

if (currentLocationData) {
  renderData(currentLocationData);
} else {
  renderData(defaultLocationData);
}

searchForm.addEventListener("submit", searchCityData);

const logo = document.getElementById("logo");

logo.addEventListener("click", function () {
  location.reload(); // Reloads the current page
});
