import videolink from "./img/video.mp4";
import logolink from "./img/Logo.png";
import moon from "./img/moon.png";
import hourlyCond from "./img/weather-icon-clear.svg";

export function createHomepage() {
  let main = document.querySelector("main");

  main.innerHTML = `
  <header class="pt-4 lg:pt-10 pb-4">
  <div class="container px-5 md:px-8 mx-auto">
    <div class="section flex items-center">
      <div class="logo flex  size-12">
        <img id="logo" class="w-fill h-fill object-fill" />
      </div>
      <form
        id="form"
        action="#"
        class="w-full flex items-center relative ml-4"
      >
        <p
          class="flex items-center searchbar bg-blue-50 bg-opacity-15 backdrop-blur-lg border border-1 border-gray-50 border-opacity-30 rounded-md px-2 py-2 focus-within:ring focus-within:ring-3 focus-within:ring-blue-500 focus-within:border-0 w-full md:w-3/4 lg:w-1/3 mr-2"
        >
          <i
            class="bi bi-search mr-1 text-white absolute top-1/2 -translate-y-1/2"
            aria-hidden="true"
          ></i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a City"
            class="bg-transparent focus:outline-none focus:ring-0 ring ring-transparent border border-transparent focus:border-transparent py-0 px-7 w-full"
          />
        </p>
      </form>
      <span class="flex items-center ml-auto p-2 w-fit h-fit">
    
        <select name="degree" id="degree" class="">
          <option value="celsius" selected>˚C</option>
          <option value="fahrenheit">˚F</option>
        </select>
      </span>
    </div>
  </div>
</header>
<div id="app" class="w-full h-full overflow-hidden relative">
  <div class="container mx-auto w-full h-full px-5 md:px-8 pt-6 overflow-auto">
    <div class="section relative lg:h-full lg:flex lg:flex-row gap-6">
      <div
        class="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-2/3 lg:overflow-auto pr-3"
      >
        <div id="current" class="flex flex-col md:flex-row lg:block h-fit pb-6 rounded-md lg:overflow-auto">
          <div id="maincondition" class="py-6 w-full md:w-1/2 lg:w-full">
            <div class="location text-white">
              <p>
                <span class="city">-</span>, <span class="country">-</span> 
              </p>
              <p>
                <span class="date mr-2">- -, --</span>
                <span class="time">--:-- --</span>
              </p>
            </div>
            <div class="weathericon h-fit p-6">
              <img
                class="block mx-auto"
                src=""
                width="auto"
                height="240px"
                alt="weather logo"
              />
            </div>
            <div class="text-white grid grid-cols-2 items-center">
              <p><span class="temp font-semibold mr-2">30°</span></p>
              <p>
                <span class="weathercondition font-medium"
                  >-</span
                >
              </p>
            </div>
          </div>
          <div id="currentDetail" class="grid grid-cols-2 gap-5">
            <div class="tile wind flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-wind"></i>
              </div>
              <div class="content">
                <p class="title">Wind</p>
                <p  class="text"><span class="windspeed">9</span> <span class="unit">km/h</span></p>
              </div>
            </div>
            <div class="tile humidity flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-moisture"></i>
              </div>
              <div class="content">
                <p class="title">Humidity</p>
                <p class="text">- <span class="unit"></span></p>
              </div>
            </div>
            <div class="tile feelike flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-thermometer"></i>
              </div>
              <div class="content">
                <p class="title">Feels like</p>
                <p class="text">- <span class="unit"></span></p>
              </div>
            </div>
            <div class="tile winddir flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-compass"></i>
              </div>
              <div class="content">
                <p class="title">Wind direction</p>
                <p class="text">- <span class="unit"></span></p>
              </div>
            </div>
            <div class="tile pressure flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-speedometer"></i>
              </div>
              <div class="content">
                <p class="title">Pressure</p>
                <p class=""><span class="text">-</span> <span class="unit">hPa</span></p>
              </div>
            </div>
            <div class="tile uv flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-sun"></i>
              </div>
              <div class="content">
                <p class="title">UV Index</p>
                <p class="text">- <span class="unit"></span></p>
              </div>
            </div>
            <div class="tile precipitation flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-droplet"></i>
              </div>
              <div class="content">
                <p class="title overflow-hidden">Precipitation</p>
                <p class="text">9 <span class="unit">mm</span></p>
              </div>
            </div>
            <div class="tile highlow flex text-white items-center">
              <div
                class="icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-white bg-opacity-10 mr-3"
              >
                <i class="bi bi-thermometer-half"></i>
              </div>
              <div class="content">
                <p class="title">High/Low</p>
                <p class="text">-/- <span class="unit">mm</span></p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="forecast"
          class="h-fit w- relative rounded-lg overflow-auto grid grid-cols-2 gap-4 lg:block"
        >
          <div
          id="moon"
            class="moon w-full bg-white bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2
            md:col-span-1 "
          >
            <div
              class="heading sticky top-0 z-10 bg-white/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md"
            >
              <p class="Title">
                <i class="bi bi-moon-stars mr-1"></i> 
                <span class="moonphase">-</span>
              </p>
            </div>
            <div class="section flex opacity-90 px-3 pb-1 pt-2">
              <div class="content w-3/4 mr-4">
                <ul class="text-white">
                  <li class="illumination flex py-1">
                    <p class="font-light">Illumination</p>
                    <p class="illuminationvalue ml-auto text-[#7cabf2f0]">-%</p>
                  </li>
                  <li
                    class="flex moonset py-1 border-0 border-t border-white border-opacity-10"
                  >
                    <p class="font-light">Moonset</p>
                    <p class="moonsettime ml-auto value text-[#7cabf2f0]">10:24 PM</p>
                  </li>
                </ul>
              </div>
              <div class="imagesection w-1/4 ml-auto">
                <img
                  id="moonimg"
                  class="block h-auto ml-auto w-3/4 object-cover rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="hourlyforcast mt-0 lg:mt-8 w-full bg-white bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2 md:col-span-1"
          >
            <div
              class="heading sticky top-0 z-10 bg-white/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md"
            >
              <p class="Title">
                <i class="bi bi-clock mr-1"></i> Hourly Forcast
              </p>
            </div>
            <div class="pl-3">
              <ul
                class="eachHour section text-center text-white flex opacity-90 pb-1 overflow-auto"
              >
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>Now</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>9PM</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>10PM</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>11PM</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>12PM</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
                <div
                  class="day shrink-0 w-fit flex flex-col px-3 py-2 gap-1"
                >
                  <p>13PM</p>
                  <p>
                    <img
                      class="hourlyImg mx-auto w-fill object-contain backdrop-blur-0"
                      alt=""
                    />
                  </p>
                  <p class="font-medium">30˚</p>
                </div>
              </ul>
            </div>
          </div>

          <div
            class="dailyforcast mt-8 w-full bg-white bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2 mb-4"
          >
            <div
              class="heading sticky top-0 z-10 bg-white/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md"
            >
              <p class="Title">
                <i class="bi bi-calendar4-week mr-1"></i> 10-Days Forcast
              </p>
            </div>

            <div
              class="eachDay section text-center text-white flex flex-col opacity-90 pb-1 overflow-auto"
            >
              <div
                class="day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center"
              >
                <div class="text-left">
                  <p>Today</p>
                  <p class="text-xs text-white/70">May 11</p>
                </div>
                <p class="font-medium text-2xl">30˚</p>
                <p>
                  <img
                    class="hourlyImg ml-auto w-fill object-contain backdrop-blur-0"
                    alt=""
                  />
                </p>
              </div>
              <div
                class="day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center"
              >
                <div class="text-left">
                  <p>Today</p>
                  <p class="text-xs text-white/70">May 11</p>
                </div>
                <p class="font-medium text-2xl">30˚</p>
                <p>
                  <img
                    class="hourlyImg ml-auto w-fill object-contain backdrop-blur-0"
                    alt=""
                  />
                </p>
              </div>
              <div
                class="day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center"
              >
                <div class="text-left">
                  <p>Today</p>
                  <p class="text-xs text-white/70">May 11</p>
                </div>
                <p class="font-medium text-2xl">30˚</p>
                <p>
                  <img
                    class="hourlyImg ml-auto w-fill object-contain backdrop-blur-0"
                    alt=""
                  />
                </p>
              </div>
              <div
                class="day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center"
              >
                <div class="text-left">
                  <p>Today</p>
                  <p class="text-xs text-white/70">May 11</p>
                </div>
                <p class="font-medium text-2xl">30˚</p>
                <p>
                  <img
                    class="hourlyImg ml-auto w-fill object-contain backdrop-blur-0"
                    alt=""
                  />
                </p>
              </div>
              <div
                class="day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center"
              >
                <div class="text-left">
                  <p>Today</p>
                  <p class="text-xs text-white/70">May 11</p>
                </div>
                <p class="font-medium text-2xl">30˚</p>
                <p>
                  <img
                    class="hourlyImg ml-auto w-fill object-contain backdrop-blur-0"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popular" class="h-fit lg:h-full w-full lg:w-1/3 flex">
        <div class="h-full w-full flex flex-col pb-3">
          <div
            class="heading sticky top-0 z-10 bg-white/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 mb-4 rounded-t-md"
          >
            <p class="Title">Popular Cities</p>
          </div>

          <div class="cities text-white flex lg:flex-col gap-5 overflow-auto h-full w-full">
            <div
              class="lagos relative flex p-4  bg-white/10 rounded-2xl  border border-white/10 min-w-60 w-2/3 md:w-2/6 lg:w-full h-fit"
            >
              <div class="flex flex-col mr-auto h-fill z-10">
                <p class="text-lg">Lagos</p>
                <p class="text-xs mb-auto">10:50</p>
                <p class="text-sm">Cloudy</p>
              </div>
              <div class="h-fit z-10">
                <p class="text-5xl mb-6">26˚</p>
                <p class="mt-auto text-sm">
                  H: <span>31˚</span> L: <span>26˚</span>
                </p>
              </div>
              <video
                autoplay
                loop
                class="cityBackground object-cover opacity-20 absolute top-0 right-0 z-0 h-full w-full rounded-2xl"
              ></video>
            </div>
            <div
              class="lagos relative flex p-4  bg-white/10 rounded-2xl  border border-white/10 min-w-60 w-2/3 md:w-2/6 lg:w-full h-fit"
            >
              <div class="flex flex-col mr-auto h-fill z-10">
                <p class="text-lg">Lagos</p>
                <p class="text-xs mb-auto">10:50</p>
                <p class="text-sm">Cloudy</p>
              </div>
              <div class="h-fit z-10">
                <p class="text-5xl mb-6">26˚</p>
                <p class="mt-auto text-sm">
                  H: <span>31˚</span> L: <span>26˚</span>
                </p>
              </div>
              <video
                autoplay
                loop
                class="cityBackground object-cover opacity-20 absolute top-0 right-0 z-0 h-full w-full rounded-2xl"
              ></video>
            </div>
            
          </div>
          <div class="AddCity flex mt-2">
            <footer class="flex bg-white/15 backdrop-blur-sm rounded-md">
              <input type="text"
                name="search"
                id="add"
                placeholder="Add a City"
                class=" focus:outline-none focus:ring-0 ring ring-transparent border border-transparent focus:border-none focus:outline-2 focus:outline-blue-500 rounded-lg px-2 py-1 w-full" />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="mt-4 bg-blue-800/10">
  <div class="container flex items-center justify-center py-2 mx-aut w-full h-7 text-center">
    <a href="https://github.com/kizzylion/weather_app" class="text-white text-base">
      <i class="bi bi-github"> Kizzylion</i>
       © <script>document.write(new Date().getFullYear())</script></a>
  </div>
</footer>
  `;

  const video = document.getElementById("bgvideo");
  const logo = document.querySelector(".logo img");
  const moondimg = document.querySelector("#moonimg");
  const hourlyImg = document.querySelectorAll(".hourlyImg");
  const city = document.querySelectorAll(".cityBackground");

  video.src = videolink;
  logo.src = logolink;
  moonimg.src = moon;
  hourlyImg.forEach((e) => (e.src = hourlyCond));
  if (city.length) {
    city.forEach((e) => (e.src = videolink));
  }
}
