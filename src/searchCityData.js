import { getCityWeatherData } from "./fetchWeatherData";
import { renderData } from "./renderData";
import { searchInput } from ".";

export async function searchCityData(event) {
  //
  event.preventDefault();
  let city = searchInput.value;
  let searchCityData = await getCityWeatherData(city);
  searchCityData == undefined
    ? alert("Cant find city")
    : renderData(searchCityData);
}
