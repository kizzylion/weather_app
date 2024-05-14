import "./style/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import videolink from "./img/video.mp4";
import logolink from "./img/Logo.png";
import moon from "./img/moon.png";
import hourlyCond from "./img/weather-icon-clear.svg";

const video = document.getElementById("bgvideo");
const logo = document.querySelector(".logo img");
const moondimg = document.querySelector("#moonimg");
const hourlyImg = document.querySelectorAll(".hourlyImg");
const city = document.querySelectorAll(".cityBackground");
console, console.log(city);

window.onload = function () {
  video.src = videolink;
  logo.src = logolink;
  moonimg.src = moon;
  hourlyImg.forEach((e) => (e.src = hourlyCond));
  if (city.length) {
    city.forEach((e) => (e.src = videolink));
  }
};
