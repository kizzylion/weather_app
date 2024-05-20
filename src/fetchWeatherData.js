import { showLoadingScreen } from ".";
import { hideLoadingScreen } from ".";

export const apiKey = "74acfdcd82e14dbdab1233448240705";
//
export async function getCityWeatherData(city) {
  showLoadingScreen();
  try {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;
    let url = new URL(apiUrl);
    let request = new Request(url, {
      method: "GET",
    });
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      let data = response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoadingScreen();
  }
}
export async function getPositionWeatherData(position) {
  showLoadingScreen();
  //
  try {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${position.latitude},${position.longitude}&days=3&aqi=no&alerts=no`;
    let url = new URL(apiUrl);
    let request = new Request(url, {
      method: "GET",
    });
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      let data = response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoadingScreen();
  }
}
