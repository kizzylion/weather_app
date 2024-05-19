import { parseISO, getHours, format } from "date-fns";
import { createHourlyInfo } from "./createHourlySection";
import { createDailyInfo } from "./dailyForcastSection";
import { data } from "autoprefixer";
import morningVideo from "./img/video.mp4";
import eveningVideo from "./img/evening.mp4";
import nightVideo from "./img/night.mp4";

export function transformDate(dateStr, pattern) {
  try {
    const date = parseISO(dateStr);

    if (isNaN(date)) {
      return format(dateStr, pattern);
      throw new RangeError(`invalid time value: ${dateStr}`);
    }

    return format(date, pattern);
  } catch (error) {
    console.log("Date Parsing error:", error.message);
  }
}

let videoLink;

// console.log(transformDate("2024-05-18 10:00", "h a"));

export async function renderData(data) {
  let main = document.querySelector("main");
  let city = document.querySelector(".city");
  let country = document.querySelector(".country");
  let date = document.querySelector(".date");
  let time = document.querySelector(".time");
  let currentWeatherIcon = document.querySelector(".weathericon img");
  let weatherCondition = document.querySelector(".weathercondition");
  let weatherTemperature = document.querySelector(".temp");
  const degreeForm = document.querySelector("#degreeForm");
  const degree = document.querySelector("#degree");
  let windSpeed = document.querySelector("#currentDetail .windspeed");
  let humidity = document.querySelector("#currentDetail .humidity .text");
  let feelsLike = document.querySelector("#currentDetail .feelike .text");
  let winddir = document.querySelector("#currentDetail .winddir .text");
  let pressure = document.querySelector("#currentDetail .pressure .text");
  let uv = document.querySelector("#currentDetail .uv .text");
  let precipitation = document.querySelector(
    "#currentDetail .precipitation .text",
  );
  let highlow = document.querySelector("#currentDetail .highlow .text");

  //moon section of forecast
  let illumination = document.querySelector(
    "#forecast #moon .illuminationvalue",
  );
  let moonPhase = document.querySelector("#forecast #moon .moonphase");
  let moonset = document.querySelector("#forecast #moon .moonsettime");

  city.innerText = data.location.name;
  country.innerText = data.location.country;
  date.innerText = transformDate(data.location.localtime, "MMM dd, yyyy");

  time.innerText = transformDate(data.location.localtime, "h:mm a");
  windSpeed.innerText = data.current.wind_kph;
  humidity.innerText = data.current.humidity;
  winddir.innerText = data.current.wind_dir;
  pressure.innerText = data.current.pressure_mb;
  uv.innerText = data.current.uv;
  precipitation.innerText = data.current.precip_mm;
  highlow.innerText = `${data.forecast.forecastday[0].day.maxtemp_c}`;

  //weather condition imge
  const conditionImgRequest = fetch(data.current.condition.icon)
    .then((response) => response.blob())
    .then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob);
      currentWeatherIcon.src = objectURL;
      currentWeatherIcon.style.height = "160px";
    })
    .catch((error) => console.log(error));
  weatherCondition.innerText = data.current.condition.text;
  //weather temperature
  weatherTemperature.innerText = returnSelectedDegree(
    data.current.temp_c,
    data.current.temp_f,
  );

  feelsLike.innerText = returnSelectedDegree(
    data.current.feelslike_c,
    data.current.feelslike_f,
  );
  highlow.innerText = `${returnSelectedDegree(
    data.forecast.forecastday[0].day.maxtemp_c,
    data.forecast.forecastday[0].day.maxtemp_f,
  )} / ${returnSelectedDegree(
    data.forecast.forecastday[0].day.mintemp_c,
    data.forecast.forecastday[0].day.mintemp_f,
  )}`;

  //Degree Switch
  degreeForm.addEventListener("change", function (elem) {
    // prevent reload
    elem.preventDefault();
    console.log(getSelectedDegree());
    renderData(data);
  });

  //Moon Section
  illumination.innerText = `${data.forecast.forecastday[0].astro.moon_illumination}%`;
  moonPhase.textContent = `${data.forecast.forecastday[0].astro.moon_phase}`;
  moonset.innerText = data.forecast.forecastday[0].astro.moonset;

  //hourly section
  await createHourlyInfo(data);

  //daily section
  createDailyInfo(data);

  //video src
  let video = document.querySelector("#bgvideo");
  videoSrc(data.location.localtime);
  video.src = videoLink;

  //bg color
  main.style.background = bgColor(data.location.localtime);
}

export function returnSelectedDegree(celsius, fahrenheit) {
  return getSelectedDegree() == "celsius" ? `${celsius}˚c` : `${fahrenheit}˚f`; // if celsius is selected then return celsius else return fahrenheit
}

function getSelectedDegree() {
  return degree.value;
}

function videoSrc(date) {
  const hours = getHours(date);

  if (hours >= 5 && hours < 17) {
    videolink = morningVideo;
  } else if (hours >= 17 && hours < 20) {
    videoLink = eveningVideo;
  } else {
    videoLink = nightVideo;
  }
}
export function bgColor(date) {
  const hours = getHours(date);

  if (hours >= 5 && hours < 17) {
    return "linear-gradient(180deg, #ecf5ff00 0%, #013e92 50%)";
  } else if (hours >= 17 && hours < 20) {
    return "linear-gradient(180deg, #ecf5ff00 0%, #537189 50%)";
  } else {
    return "linear-gradient(180deg, #ecf5ff00 0%, #040e1d 40%)";
  }
}
