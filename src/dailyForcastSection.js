import { format } from "date-fns";
import { returnSelectedDegree } from "./renderData";

export async function createDailyInfo(data) {
  let eachDay = document.querySelector(".eachDay");
  eachDay.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const dayDiv = await fetch(data.forecast.forecastday[i].day.condition.icon)
      .then((response) => response.blob())
      .then((myBlob) => URL.createObjectURL(myBlob))
      .then((imgUrl) => {
        let list = document.createElement("li");
        list.classList.add(
          "day",
          "grid",
          "grid-cols-3",
          "w-full",
          "px-3",
          "py-2",
          "gap-1",
          "items-center",
        );
        list.innerHTML = `
        <div class="text-left">
            <p>Today</p>
            <p class="text-xs text-white/70">May 11</p>
        </div>
        <p>
            <img src=${imgUrl} class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0" alt="">
        </p>
        <p class="flex items-center flex-nowrap  text-xs md:text-mdd font-bold ">${returnSelectedDegree(data.forecast.forecastday[i].day.mintemp_c, data.forecast.forecastday[i].day.mintemp_f)}  <span class="inline-block min-w-4 w-full max-w-6 h-1 mx-auto rounded-md dayGradient"></span>  ${returnSelectedDegree(data.forecast.forecastday[i].day.maxtemp_c, data.forecast.forecastday[i].day.mintemp_f)} </p>
      `;
        eachDay.appendChild(list);
      })
      .catch((error) => console.log(error));
  }
}
