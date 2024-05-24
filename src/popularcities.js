import { getCityWeatherData } from "./fetchWeatherData";
import { transformDate } from "./renderData";
import { returnSelectedDegree } from "./renderData";
import { videoSrc } from "./renderData";
import { bgColor } from "./renderData";

export class PopularCitiesSection {
  constructor() {}

  #library = ["dubai", "hong kong", "new york"];

  citesData = this.getCitiesData();

  setLibrary(array) {
    this.#library = array;
  }

  //save to local storage
  saveToLocalStorage() {
    localStorage.setItem("library", JSON.stringify(this.#library));
  }

  getLocalStorage() {
    return localStorage.getItem("library");
  }

  //check if local storage exist
  checkLocalStorage() {
    if (this.getLocalStorage()) {
      this.setLibrary(JSON.parse(this.getLocalStorage()));
    }
  }

  addCity(cityName) {
    //check if cityName already exist in library
    if (this.#library.includes(cityName.toLowerCase())) {
      alert("City already added");
      return;
    }
    this.#library.push(cityName.toLowerCase());
    this.saveToLocalStorage();
    this.getLocalStorage();
    this.citesData = this.getCitiesData();
    this.printPopularCities();
  }

  removeCity = (cityName) => {
    let lib = this.getLibrary();
    lib = lib.filter((city) => city.toLowerCase() !== cityName.toLowerCase());
    this.setLibrary(lib);
    this.saveToLocalStorage();
    this.citesData = this.getCitiesData();
    this.printPopularCities();
  };
  getLibrary() {
    this.checkLocalStorage();
    return this.#library;
  }
  async getCitiesData() {
    let library = this.getLibrary();

    let citesData = await Promise.all(
      library.map(async (city) => {
        return await getCityWeatherData(city);
      }),
    );

    return citesData;
  }

  async getPopularCities() {
    return this.citesData;
  }

  async printPopularCities() {
    //get popular cities

    let popularCities = await this.getPopularCities();
    let citiesDiv = document.querySelector(".cities");

    citiesDiv.innerHTML = "";
    if (!this.getLibrary().length) {
      citiesDiv.innerHTML = `<p class='text-center text-white/50 h-10 w-full'>No cities added yet</p>`;
      return;
    }

    let cities = await popularCities.map((city) => {
      let cityElement = `
      <div class="${city.location.name} relative flex p-4  bg-black/10 rounded-2xl  border border-white/10 min-w-60 w-2/3 md:w-2/6 lg:w-full h-fill">
              <div class="flex flex-col mr-auto h-fill z-10">
                <p class="text-lg">${city.location.name}</p>
                <p class="text-xs mb-auto">${transformDate(city.location.localtime, "dd/MMM  h:mm a")}</p>
              
                <p class="text-sm">${city.current.condition.text}</p>
              </div>

              <!-- add the delete button -->
              <div class="absolute removeBtns top-0 right-0 z-40">
              <button class="grid place-content-center delete-btn p-1 bg-black/25 rounded-full size-5 mt-1 mr-1">
              <i class="fa-solid fa-xmark text-xs text-gray-200"></i>
              </button>
              </div>
              
              <div class="flex flex-col h-fill z-10">
                <p class="text-3xl lg:text-5xl text-right mb-6">${returnSelectedDegree(
                  Math.round(city.current.temp_c),
                  Math.round(city.current.temp_f),
                )}</p>
                <p class=" text-sm text-right mt-auto">
                  H: <span>${returnSelectedDegree(
                    Math.round(city.forecast.forecastday[0].day.maxtemp_c),
                    Math.round(city.forecast.forecastday[0].day.maxtemp_f),
                  )}</span> <br/> L: <span>${returnSelectedDegree(
                    Math.round(city.forecast.forecastday[0].day.mintemp_c),
                    Math.round(city.forecast.forecastday[0].day.mintemp_f),
                  )}</span>
                  
                </p>
              </div>
              <div class="bg-black/20 object-cover opacity-20 absolute top-0 right-0 z-0 h-full w-full rounded-2xl z-10"></div>
              <video src=${videoSrc(transformDate(city.location.localtime, "H"))} autoplay="true" loop="true" controls="false" class="cityBackground object-cover opacity-60 absolute top-0 right-0 z-0 h-full w-full rounded-2xl"></video>
            </div>
      
      `;

      return cityElement;
    });

    //print popular cities

    citiesDiv.innerHTML = await cities.join("");

    // ADD AN EVENT LISTENER ON THE DELETE BTN
    let deleteBtns = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", () => {
        this.removeCity(popularCities[i].location.name);
      });
    }
  }
}

class PopularCities {
  constructor(name) {
    this.name = name;
  }
}
