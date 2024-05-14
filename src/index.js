import "./style/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import videolink from "./img/video.mp4";
import logolink from "./img/Logo.png";
import moon from "./img/moon.png";
import hourlyCond from "./img/weather-icon-clear.svg";
import { getCurrentLocation } from "./getCurrentLocation";
import { data } from "autoprefixer";
import { getPositionWeatherData, getCityWeatherData } from "./fetchWeatherData";
import { renderData } from "./renderData";
const { format } = require("date-fns");

const video = document.getElementById("bgvideo");
const logo = document.querySelector(".logo img");
const moondimg = document.querySelector("#moonimg");
const hourlyImg = document.querySelectorAll(".hourlyImg");
const city = document.querySelectorAll(".cityBackground");

window.onload = function () {
  video.src = videolink;
  logo.src = logolink;
  moonimg.src = moon;
  hourlyImg.forEach((e) => (e.src = hourlyCond));
  if (city.length) {
    city.forEach((e) => (e.src = videolink));
  }
};

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
