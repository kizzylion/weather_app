import { format } from "date-fns";
import { returnSelectedDegree } from "./renderData";
import { transformDate } from "./renderData";

export async function createHourlyInfo(hour) {
  let eachHour = document.querySelector(".eachHour");
  eachHour.innerHTML = "";

  for (let i = transformDate(hour.location.localtime, "H"); i < 24; i++) {
    const hourDiv = await fetch(
      hour.forecast.forecastday[0].hour[i].condition.icon,
    )
      .then((response) => response.blob())
      .then((myBlob) => URL.createObjectURL(myBlob))
      .then((imgUrl) => {
        let list = document.createElement("li");
        list.classList.add(
          "day",
          "shrink-0",
          "w-fit",
          "flex",
          "flex-col",
          "px-3",
          "py-2",
          "gap-1",
        );
        list.innerHTML = `
        <p>${transformDate(hour.forecast.forecastday[0].hour[i].time, "h a")}</p>
        <p>
          <img src=${imgUrl} class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0" alt="">
        </p>
        <p class="font-medium">${returnSelectedDegree(hour.forecast.forecastday[0].hour[i].temp_c, hour.forecast.forecastday[0].hour[i].temp_f)}</p>
        `;

        eachHour.appendChild(list);
      })
      .catch((error) => console.log(error));
  }
}
