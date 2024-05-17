import "./style/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { data } from "autoprefixer";
const { format } = require("date-fns");
import { getCurrentLocation } from "./getCurrentLocation";
import { getPositionWeatherData, getCityWeatherData } from "./fetchWeatherData";
import { renderData } from "./renderData";
import { createHomepage } from "./createHomepage";
import { createHourlyInfo } from "./createHourlySection";
import { createDailyInfo } from "./dailyForcastSection";

createHomepage();
createHourlyInfo();
createDailyInfo();

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
