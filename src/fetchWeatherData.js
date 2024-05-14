export const apiKey = "74acfdcd82e14dbdab1233448240705";
//
export async function getCityWeatherData(city) {
  try {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getPositionWeatherData(position) {
  //
  try {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${position.latitude},${position.longitude}&days=7&aqi=no&alerts=no`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
