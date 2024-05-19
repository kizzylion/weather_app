/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 28018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ createHomepage)
});

;// CONCATENATED MODULE: ./src/img/video.mp4
/* harmony default export */ const img_video = (__webpack_require__.p + "videos/video.mp4");
;// CONCATENATED MODULE: ./src/img/Logo.png
const Logo_namespaceObject = __webpack_require__.p + "images/Logo.png";
;// CONCATENATED MODULE: ./src/img/moon.png
const moon_namespaceObject = __webpack_require__.p + "images/moon.png";
;// CONCATENATED MODULE: ./src/img/weather-icon-clear.svg
const weather_icon_clear_namespaceObject = __webpack_require__.p + "images/weather-icon-clear.svg";
;// CONCATENATED MODULE: ./src/createHomepage.js




function createHomepage() {
  var main = document.querySelector("main");
  main.innerHTML = "\n  <header class=\"pt-4 lg:pt-10 pb-4\">\n  <div class=\"container px-5 md:px-8 mx-auto\">\n    <div class=\"section flex items-center\">\n      <div class=\"logo flex  size-12\">\n        <img id=\"logo\" class=\"w-fill h-fill object-fill\" />\n      </div>\n      <form\n        id=\"searchform\"\n        action=\"#\"\n        class=\"w-full flex items-center relative ml-4\"\n      >\n        <p\n          class=\"flex items-center searchbar bg-blue-50 bg-opacity-15 backdrop-blur-lg border border-1 border-gray-50 border-opacity-30 rounded-md px-2 py-2 focus-within:ring focus-within:ring-3 focus-within:ring-blue-500 focus-within:border-0 w-full md:w-3/4 lg:w-1/3 mr-2\"\n        >\n          <i\n            class=\"bi bi-search mr-1 text-white absolute top-1/2 -translate-y-1/2\"\n            aria-hidden=\"true\"\n          ></i>\n          <input\n            type=\"text\"\n            name=\"search\"\n            id=\"search\"\n            placeholder=\"Search for a City\"\n            class=\"bg-transparent focus:outline-none focus:ring-0 ring ring-transparent border border-transparent focus:border-transparent py-0 px-7 w-full\"\n          />\n        </p>\n      </form>\n      <span class=\"flex items-center ml-auto p-2 w-fit h-fit\">\n    \n        <select name=\"degree\" id=\"degree\" class=\"\">\n          <option value=\"celsius\" selected>\u02DAC</option>\n          <option value=\"fahrenheit\">\u02DAF</option>\n        </select>\n      </span>\n    </div>\n  </div>\n</header>\n<div id=\"app\" class=\"w-full h-full overflow-hidden relative\">\n  <div class=\"container mx-auto w-full h-full px-5 md:px-8 pt-6 overflow-auto\">\n    <div class=\"section relative lg:h-full lg:flex lg:flex-row gap-6\">\n      <div\n        class=\"h-full grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-2/3 lg:overflow-auto pr-3\"\n      >\n        <div id=\"current\" class=\"flex flex-col md:flex-row lg:block h-fit pb-6 rounded-md lg:overflow-auto\">\n          <div id=\"maincondition\" class=\"py-6 w-full md:w-1/2 lg:w-full\">\n            <div class=\"location text-white\">\n              <p>\n                <span class=\"city\">-</span>, <span class=\"country\">-</span> \n              </p>\n              <p>\n                <span class=\"date mr-2\">- -, --</span>\n                <span class=\"time\">--:-- --</span>\n              </p>\n            </div>\n            <div class=\"weathericon h-fit p-6\">\n              <img\n                class=\"block mx-auto\"\n                src=\"\"\n                width=\"auto\"\n                height=\"240px\"\n                alt=\"weather logo\"\n              />\n            </div>\n            <div class=\"text-white grid grid-cols-2 items-center\">\n              <p><span class=\"temp font-semibold mr-2\">30\xB0</span></p>\n              <p>\n                <span class=\"weathercondition font-medium\"\n                  >-</span\n                >\n              </p>\n            </div>\n          </div>\n          <div id=\"currentDetail\" class=\"grid grid-cols-2 gap-5\">\n            <div class=\"tile wind flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-wind\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">Wind</p>\n                <p  class=\"text\"><span class=\"windspeed\">9</span> <span class=\"unit\">km/h</span></p>\n              </div>\n            </div>\n            <div class=\"tile humidity flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-moisture\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">Humidity</p>\n                <p class=\"text\">- <span class=\"unit\"></span></p>\n              </div>\n            </div>\n            <div class=\"tile feelike flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-thermometer\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">Feels like</p>\n                <p class=\"text\">- <span class=\"unit\"></span></p>\n              </div>\n            </div>\n            <div class=\"tile winddir flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-compass\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">Wind direction</p>\n                <p class=\"text\">- <span class=\"unit\"></span></p>\n              </div>\n            </div>\n            <div class=\"tile pressure flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-speedometer\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">Pressure</p>\n                <p class=\"\"><span class=\"text\">-</span> <span class=\"unit\">hPa</span></p>\n              </div>\n            </div>\n            <div class=\"tile uv flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-sun\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">UV Index</p>\n                <p class=\"text\">- <span class=\"unit\"></span></p>\n              </div>\n            </div>\n            <div class=\"tile precipitation flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-droplet\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title overflow-hidden\">Precipitation</p>\n                <p class=\"text\">9 <span class=\"unit\">mm</span></p>\n              </div>\n            </div>\n            <div class=\"tile highlow flex text-white items-center\">\n              <div\n                class=\"icon flex h-fit justify-center items-center border border-1 rounded-md border-white border-opacity-10 bg-black bg-opacity-10 mr-3\"\n              >\n                <i class=\"bi bi-thermometer-half\"></i>\n              </div>\n              <div class=\"content\">\n                <p class=\"title\">High/Low</p>\n                <p class=\"text\">-/- <span class=\"unit\">mm</span></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div\n          id=\"forecast\"\n          class=\"h-fit w- relative rounded-lg overflow-auto grid grid-cols-2 gap-4 lg:block\"\n        >\n          <div\n          id=\"moon\"\n            class=\"moon w-full bg-black bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2\n            md:col-span-1 \"\n          >\n            <div\n              class=\"heading sticky top-0 z-10 bg-black/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md\"\n            >\n              <p class=\"Title\">\n                <i class=\"bi bi-moon-stars mr-1\"></i> \n                <span class=\"moonphase\">-</span>\n              </p>\n            </div>\n            <div class=\"section flex opacity-90 px-3 pb-1 pt-2\">\n              <div class=\"content w-3/4 mr-4\">\n                <ul class=\"text-white\">\n                  <li class=\"illumination flex py-1\">\n                    <p class=\"font-light\">Illumination</p>\n                    <p class=\"illuminationvalue ml-auto text-[#7cabf2f0]\">-%</p>\n                  </li>\n                  <li\n                    class=\"flex moonset py-1 border-0 border-t border-white border-opacity-10\"\n                  >\n                    <p class=\"font-light\">Moonset</p>\n                    <p class=\"moonsettime ml-auto value text-[#7cabf2f0]\">10:24 PM</p>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"imagesection w-1/4 ml-auto\">\n                <img\n                  id=\"moonimg\"\n                  class=\"block h-auto ml-auto w-3/4 object-cover rounded-full\"\n                  alt=\"\"\n                />\n              </div>\n            </div>\n          </div>\n\n          <div\n            class=\"hourlyforcast mt-0 lg:mt-8 w-full bg-black bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2 md:col-span-1\"\n          >\n            <div\n              class=\"heading sticky top-0 z-10 bg-black/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md\"\n            >\n              <p class=\"Title\">\n                <i class=\"bi bi-clock mr-1\"></i> Hourly Forcast\n              </p>\n            </div>\n            <div class=\"pl-3\">\n              <ul\n                class=\"eachHour section text-center text-white flex opacity-90 pb-1 overflow-auto\"\n              >\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>Now</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>9PM</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>10PM</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>11PM</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>12PM</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n                <div\n                  class=\"day shrink-0 w-fit flex flex-col px-3 py-2 gap-1\"\n                >\n                  <p>13PM</p>\n                  <p>\n                    <img\n                      class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\"\n                      alt=\"\"\n                    />\n                  </p>\n                  <p class=\"font-medium\">30\u02DA</p>\n                </div>\n              </ul>\n            </div>\n          </div>\n\n          <div\n            class=\"dailyforcast mt-8 w-full bg-black bg-opacity-15 border border-1 border-white border-opacity-10 backdrop-blur-sm rounded-lg pb-2 col-span-2 mb-4\"\n          >\n            <div\n              class=\"heading sticky top-0 z-10 bg-black/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 rounded-t-md\"\n            >\n              <p class=\"Title\">\n                <i class=\"bi bi-calendar4-week mr-1\"></i> 10-Days Forcast\n              </p>\n            </div>\n\n            <div\n              class=\"eachDay section text-center text-white flex flex-col opacity-90 pb-1 overflow-auto\"\n            >\n              <div\n                class=\"day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center\"\n              >\n                <div class=\"text-left\">\n                  <p>Today</p>\n                  <p class=\"text-xs text-white/70\">May 11</p>\n                </div>\n                <p class=\"font-medium text-2xl\">30\u02DA</p>\n                <p>\n                  <img\n                    class=\"hourlyImg ml-auto w-fill object-contain backdrop-blur-0\"\n                    alt=\"\"\n                  />\n                </p>\n              </div>\n              <div\n                class=\"day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center\"\n              >\n                <div class=\"text-left\">\n                  <p>Today</p>\n                  <p class=\"text-xs text-white/70\">May 11</p>\n                </div>\n                <p class=\"font-medium text-2xl\">30\u02DA</p>\n                <p>\n                  <img\n                    class=\"hourlyImg ml-auto w-fill object-contain backdrop-blur-0\"\n                    alt=\"\"\n                  />\n                </p>\n              </div>\n              <div\n                class=\"day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center\"\n              >\n                <div class=\"text-left\">\n                  <p>Today</p>\n                  <p class=\"text-xs text-white/70\">May 11</p>\n                </div>\n                <p class=\"font-medium text-2xl\">30\u02DA</p>\n                <p>\n                  <img\n                    class=\"hourlyImg ml-auto w-fill object-contain backdrop-blur-0\"\n                    alt=\"\"\n                  />\n                </p>\n              </div>\n              <div\n                class=\"day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center\"\n              >\n                <div class=\"text-left\">\n                  <p>Today</p>\n                  <p class=\"text-xs text-white/70\">May 11</p>\n                </div>\n                <p class=\"font-medium text-2xl\">30\u02DA</p>\n                <p>\n                  <img\n                    class=\"hourlyImg ml-auto w-fill object-contain backdrop-blur-0\"\n                    alt=\"\"\n                  />\n                </p>\n              </div>\n              <div\n                class=\"day grid grid-cols-3 w-full px-3 py-2 gap-1 items-center\"\n              >\n                <div class=\"text-left\">\n                  <p>Today</p>\n                  <p class=\"text-xs text-white/70\">May 11</p>\n                </div>\n                <p class=\"font-medium text-2xl\">30\u02DA</p>\n                <p>\n                  <img\n                    class=\"hourlyImg ml-auto w-fill object-contain backdrop-blur-0\"\n                    alt=\"\"\n                  />\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"popular\" class=\"h-fit lg:h-full w-full lg:w-1/3 flex\">\n        <div class=\"h-full w-full flex flex-col pb-3\">\n          <div\n            class=\"heading sticky top-0 z-10 bg-black/10 text-[#7cabf2f0] backdrop-blur-xl px-3 pb-1 pt-2 mb-4 rounded-t-md\"\n          >\n            <p class=\"Title\">Popular Cities</p>\n          </div>\n\n          <div class=\"cities text-white flex lg:flex-col gap-5 overflow-auto h-full w-full\">\n            <div\n              class=\"lagos relative flex p-4  bg-black/10 rounded-2xl  border border-white/10 min-w-60 w-2/3 md:w-2/6 lg:w-full h-fit\"\n            >\n              <div class=\"flex flex-col mr-auto h-fill z-10\">\n                <p class=\"text-lg\">Lagos</p>\n                <p class=\"text-xs mb-auto\">10:50</p>\n                <p class=\"text-sm\">Cloudy</p>\n              </div>\n              <div class=\"h-fit z-10\">\n                <p class=\"text-5xl mb-6\">26\u02DA</p>\n                <p class=\"mt-auto text-sm\">\n                  H: <span>31\u02DA</span> L: <span>26\u02DA</span>\n                </p>\n              </div>\n              <video\n                autoplay\n                loop\n                class=\"cityBackground object-cover opacity-20 absolute top-0 right-0 z-0 h-full w-full rounded-2xl\"\n              ></video>\n            </div>\n            <div\n              class=\"lagos relative flex p-4  bg-black/10 rounded-2xl  border border-white/10 min-w-60 w-2/3 md:w-2/6 lg:w-full h-fit\"\n            >\n              <div class=\"flex flex-col mr-auto h-fill z-10\">\n                <p class=\"text-lg\">Lagos</p>\n                <p class=\"text-xs mb-auto\">10:50</p>\n                <p class=\"text-sm\">Cloudy</p>\n              </div>\n              <div class=\"h-fit z-10\">\n                <p class=\"text-5xl mb-6\">26\u02DA</p>\n                <p class=\"mt-auto text-sm\">\n                  H: <span>31\u02DA</span> L: <span>26\u02DA</span>\n                </p>\n              </div>\n              <video\n                autoplay\n                loop\n                class=\"cityBackground object-cover opacity-20 absolute top-0 right-0 z-0 h-full w-full rounded-2xl\"\n              ></video>\n            </div>\n            \n          </div>\n          <div class=\"AddCity flex mt-2\">\n            <footer class=\"flex bg-black/15 backdrop-blur-sm rounded-md\">\n              <input type=\"text\"\n                name=\"search\"\n                id=\"add\"\n                placeholder=\"Add a City\"\n                class=\" focus:outline-none focus:ring-0 ring ring-transparent border border-transparent focus:border-none focus:outline-2 focus:outline-blue-500 rounded-lg px-2 py-1 w-full\" />\n            </footer>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"mt-4 bg-blue-800/10\">\n  <div class=\"container flex items-center justify-center py-2 mx-aut w-full h-7 text-center\">\n    <a href=\"https://github.com/kizzylion/weather_app\" class=\"text-white text-base\">\n      <i class=\"bi bi-github\"> Kizzylion</i>\n       \xA9 <script>document.write(new Date().getFullYear())</script></a>\n  </div>\n</footer>\n  ";
  var video = document.getElementById("bgvideo");
  var logo = document.querySelector(".logo img");
  var moondimg = document.querySelector("#moonimg");
  var hourlyImg = document.querySelectorAll(".hourlyImg");
  var city = document.querySelectorAll(".cityBackground");
  document.addEventListener("DOMContentLoaded", function () {
    if (video) {
      video.src = img_video;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.controls = false;

      // For some browsers that need a nudge to start the video

      var playVideo = function playVideo() {
        video.play()["catch"](function (error) {
          console.error("Video playback failed:", error);
          // Handle the error as needed
        });
      };
      playVideo();
    }
  });
  logo.src = Logo_namespaceObject;
  moonimg.src = moon_namespaceObject;
  hourlyImg.forEach(function (e) {
    return e.src = weather_icon_clear_namespaceObject;
  });
  if (city.length) {
    city.forEach(function (e) {
      return e.src = img_video;
    });
  }
}

/***/ }),

/***/ 3057:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _A: () => (/* binding */ getPositionWeatherData),
/* harmony export */   uG: () => (/* binding */ getCityWeatherData)
/* harmony export */ });
/* unused harmony export apiKey */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44497);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);
___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var apiKey = "74acfdcd82e14dbdab1233448240705";
//
function getCityWeatherData(_x) {
  return _getCityWeatherData.apply(this, arguments);
}
function _getCityWeatherData() {
  _getCityWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var apiUrl, url, request, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          (0,___WEBPACK_IMPORTED_MODULE_0__/* .showLoadingScreen */ .S)();
          _context.prev = 1;
          apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=".concat(apiKey, "&q=").concat(city, "&days=7&aqi=no&alerts=no");
          url = new URL(apiUrl);
          request = new Request(url, {
            method: "GET"
          });
          _context.next = 7;
          return fetch(request);
        case 7:
          response = _context.sent;
          if (response.ok) {
            _context.next = 12;
            break;
          }
          throw new Error("Network response was not ok");
        case 12:
          data = response.json();
          return _context.abrupt("return", data);
        case 14:
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 19:
          _context.prev = 19;
          (0,___WEBPACK_IMPORTED_MODULE_0__/* .hideLoadingScreen */ .t)();
          return _context.finish(19);
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 16, 19, 22]]);
  }));
  return _getCityWeatherData.apply(this, arguments);
}
function getPositionWeatherData(_x2) {
  return _getPositionWeatherData.apply(this, arguments);
}
function _getPositionWeatherData() {
  _getPositionWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(position) {
    var apiUrl, url, request, response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          (0,___WEBPACK_IMPORTED_MODULE_0__/* .showLoadingScreen */ .S)();
          //
          _context2.prev = 1;
          apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=".concat(apiKey, "&q=").concat(position.latitude, ",").concat(position.longitude, "&days=7&aqi=no&alerts=no");
          url = new URL(apiUrl);
          request = new Request(url, {
            method: "GET"
          });
          _context2.next = 7;
          return fetch(request);
        case 7:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 12;
            break;
          }
          throw new Error("Network response was not ok");
        case 12:
          data = response.json();
          return _context2.abrupt("return", data);
        case 14:
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 19:
          _context2.prev = 19;
          (0,___WEBPACK_IMPORTED_MODULE_0__/* .hideLoadingScreen */ .t)();
          return _context2.finish(19);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 16, 19, 22]]);
  }));
  return _getPositionWeatherData.apply(this, arguments);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ getCurrentLocation)
/* harmony export */ });
function getCurrentLocation() {
  return new Promise(function (resolve, reject) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        resolve({
          latitude: latitude,
          longitude: longitude
        });
      }, function (error) {
        reject(error);
      });
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

/***/ }),

/***/ 44497:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ showLoadingScreen),
/* harmony export */   t: () => (/* binding */ hideLoadingScreen)
/* harmony export */ });
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21993);
/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getCurrentLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85439);
/* harmony import */ var _fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3057);
/* harmony import */ var _renderData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18130);
/* harmony import */ var _createHomepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__]);
_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var _require = __webpack_require__(17705),
  format = _require.format;




(0,_createHomepage__WEBPACK_IMPORTED_MODULE_3__/* .createHomepage */ .F)();
var searchForm = document.querySelector("#searchform");
var searchInput = document.querySelector("#searchform input");
function showLoadingScreen() {
  document.getElementById("loadingScreen").classList.remove("hidden");
}

// Function to hide the loading screen
function hideLoadingScreen() {
  document.getElementById("loadingScreen").classList.add("hidden");
}
var currentLocationData = await (0,_getCurrentLocation__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentLocation */ .L)().then(function (position) {
  console.log("Position:", position);
  return (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__/* .getPositionWeatherData */ ._A)(position);
  // You can use the location data here
})["catch"](function (error) {
  console.error("Error fetching location:", error);
  // Handle errors here
});
console.log(currentLocationData);
var defaultLocationData = await (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__/* .getCityWeatherData */ .uG)("London");
console.log(defaultLocationData);
if (currentLocationData) {
  (0,_renderData__WEBPACK_IMPORTED_MODULE_2__/* .renderData */ .rb)(currentLocationData);
} else {
  (0,_renderData__WEBPACK_IMPORTED_MODULE_2__/* .renderData */ .rb)(defaultLocationData);
}
searchForm.addEventListener("submit", searchCityData);
function searchCityData(_x) {
  return _searchCityData.apply(this, arguments);
}
function _searchCityData() {
  _searchCityData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var city, searchCityData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //
          event.preventDefault();
          city = searchInput.value;
          _context.next = 4;
          return (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__/* .getCityWeatherData */ .uG)(city);
        case 4:
          searchCityData = _context.sent;
          searchCityData == undefined ? alert("Cant find city") : (0,_renderData__WEBPACK_IMPORTED_MODULE_2__/* .renderData */ .rb)(searchCityData);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _searchCityData.apply(this, arguments);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 18130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rb: () => (/* binding */ renderData),
  w2: () => (/* binding */ returnSelectedDegree),
  fm: () => (/* binding */ transformDate)
});

// EXTERNAL MODULE: ./node_modules/date-fns/parseISO.mjs
var parseISO = __webpack_require__(84929);
// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 33 modules
var format = __webpack_require__(34137);
;// CONCATENATED MODULE: ./src/createHourlySection.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function createHourlyInfo(_x) {
  return _createHourlyInfo.apply(this, arguments);
}
function _createHourlyInfo() {
  _createHourlyInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(hour) {
    var eachHour, _loop, i;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          eachHour = document.querySelector(".eachHour");
          eachHour.innerHTML = "";
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            var hourDiv;
            return _regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(hour.forecast.forecastday[0].hour[i].condition.icon).then(function (response) {
                    return response.blob();
                  }).then(function (myBlob) {
                    return URL.createObjectURL(myBlob);
                  }).then(function (imgUrl) {
                    var list = document.createElement("li");
                    list.classList.add("day", "shrink-0", "w-fit", "flex", "flex-col", "px-3", "py-2", "gap-1");
                    list.innerHTML = "\n        <p>".concat((0,format/* format */.GP)(new Date(hour.forecast.forecastday[0].hour[i].time), "h a"), "</p>\n        <p>\n          <img src=").concat(imgUrl, " class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\" alt=\"\">\n        </p>\n        <p class=\"font-medium\">").concat(returnSelectedDegree(hour.forecast.forecastday[0].hour[i].temp_c, hour.forecast.forecastday[0].hour[i].temp_f), "</p>\n        ");
                    eachHour.appendChild(list);
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                case 2:
                  hourDiv = _context.sent;
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          i = transformDate(hour.location.localtime, "H");
        case 4:
          if (!(i < 24)) {
            _context2.next = 9;
            break;
          }
          return _context2.delegateYield(_loop(i), "t0", 6);
        case 6:
          i++;
          _context2.next = 4;
          break;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return _createHourlyInfo.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/dailyForcastSection.js
function dailyForcastSection_typeof(o) { "@babel/helpers - typeof"; return dailyForcastSection_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dailyForcastSection_typeof(o); }
function dailyForcastSection_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ dailyForcastSection_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == dailyForcastSection_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(dailyForcastSection_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function dailyForcastSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function dailyForcastSection_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { dailyForcastSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { dailyForcastSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function createDailyInfo(_x) {
  return _createDailyInfo.apply(this, arguments);
}
function _createDailyInfo() {
  _createDailyInfo = dailyForcastSection_asyncToGenerator( /*#__PURE__*/dailyForcastSection_regeneratorRuntime().mark(function _callee(data) {
    var eachDay, _loop, i;
    return dailyForcastSection_regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          eachDay = document.querySelector(".eachDay");
          eachDay.innerHTML = "";
          _loop = /*#__PURE__*/dailyForcastSection_regeneratorRuntime().mark(function _loop(i) {
            var dayDiv;
            return dailyForcastSection_regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(data.forecast.forecastday[i].day.condition.icon).then(function (response) {
                    return response.blob();
                  }).then(function (myBlob) {
                    return URL.createObjectURL(myBlob);
                  }).then(function (imgUrl) {
                    var list = document.createElement("li");
                    list.classList.add("day", "grid", "grid-cols-3", "w-full", "px-3", "py-2", "gap-1", "items-center");
                    list.innerHTML = "\n        <div class=\"text-left\">\n            <p>".concat(transformDate(data.forecast.forecastday[i].date, "E"), "</p>\n            <p class=\"text-xs text-white/70\">").concat(transformDate(data.forecast.forecastday[i].date, "MMM d"), "</p>\n        </div>\n        <p>\n            <img src=").concat(imgUrl, " class=\"hourlyImg mx-auto w-fill object-contain backdrop-blur-0\" alt=\"\">\n        </p>\n        <p class=\"flex items-center flex-nowrap  text-xs md:text-mdd font-bold \">").concat(returnSelectedDegree(data.forecast.forecastday[i].day.mintemp_c, data.forecast.forecastday[i].day.mintemp_f), "  <span class=\"inline-block min-w-4 w-full max-w-6 h-1 mx-auto rounded-md dayGradient\"></span>  ").concat(returnSelectedDegree(data.forecast.forecastday[i].day.maxtemp_c, data.forecast.forecastday[i].day.mintemp_f), " </p>\n      ");
                    eachDay.appendChild(list);
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                case 2:
                  dayDiv = _context.sent;
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          i = 0;
        case 4:
          if (!(i < 7)) {
            _context2.next = 9;
            break;
          }
          return _context2.delegateYield(_loop(i), "t0", 6);
        case 6:
          i++;
          _context2.next = 4;
          break;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return _createDailyInfo.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/autoprefixer/lib/autoprefixer.js
var autoprefixer = __webpack_require__(21993);
;// CONCATENATED MODULE: ./src/renderData.js
function renderData_typeof(o) { "@babel/helpers - typeof"; return renderData_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, renderData_typeof(o); }
function renderData_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ renderData_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == renderData_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(renderData_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function renderData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function renderData_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { renderData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { renderData_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function transformDate(dateStr, pattern) {
  try {
    var date = (0,parseISO/* parseISO */.H)(dateStr);
    if (isNaN(date)) {
      return (0,format/* format */.GP)(dateStr, pattern);
      throw new RangeError("invalid time value: ".concat(dateStr));
    }
    return (0,format/* format */.GP)(date, pattern);
  } catch (error) {
    console.log("Date Parsing error:", error.message);
  }
}

// console.log(transformDate("2024-05-18 10:00", "h a"));

function renderData(_x) {
  return _renderData.apply(this, arguments);
}
function _renderData() {
  _renderData = renderData_asyncToGenerator( /*#__PURE__*/renderData_regeneratorRuntime().mark(function _callee(data) {
    var city, country, date, time, currentWeatherIcon, weatherCondition, weatherTemperature, degree, windSpeed, humidity, feelsLike, winddir, pressure, uv, precipitation, highlow, illumination, moonPhase, moonset, conditionImgRequest;
    return renderData_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          city = document.querySelector(".city");
          country = document.querySelector(".country");
          date = document.querySelector(".date");
          time = document.querySelector(".time");
          currentWeatherIcon = document.querySelector(".weathericon img");
          weatherCondition = document.querySelector(".weathercondition");
          weatherTemperature = document.querySelector(".temp");
          degree = document.querySelector("#degree");
          windSpeed = document.querySelector("#currentDetail .windspeed");
          humidity = document.querySelector("#currentDetail .humidity .text");
          feelsLike = document.querySelector("#currentDetail .feelike .text");
          winddir = document.querySelector("#currentDetail .winddir .text");
          pressure = document.querySelector("#currentDetail .pressure .text");
          uv = document.querySelector("#currentDetail .uv .text");
          precipitation = document.querySelector("#currentDetail .precipitation .text");
          highlow = document.querySelector("#currentDetail .highlow .text"); //moon section of forecast
          illumination = document.querySelector("#forecast #moon .illuminationvalue");
          moonPhase = document.querySelector("#forecast #moon .moonphase");
          moonset = document.querySelector("#forecast #moon .moonsettime");
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
          highlow.innerText = "".concat(data.forecast.forecastday[0].day.maxtemp_c);

          //weather condition imge
          conditionImgRequest = fetch(data.current.condition.icon).then(function (response) {
            return response.blob();
          }).then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            currentWeatherIcon.src = objectURL;
            currentWeatherIcon.style.height = "160px";
          })["catch"](function (error) {
            return console.log(error);
          });
          weatherCondition.innerText = data.current.condition.text;
          //weather temperature
          weatherTemperature.innerText = returnSelectedDegree(data.current.temp_c, data.current.temp_f);
          feelsLike.innerText = returnSelectedDegree(data.current.feelslike_c, data.current.feelslike_f);
          highlow.innerText = "".concat(returnSelectedDegree(data.forecast.forecastday[0].day.maxtemp_c, data.forecast.forecastday[0].day.maxtemp_f), " / ").concat(returnSelectedDegree(data.forecast.forecastday[0].day.mintemp_c, data.forecast.forecastday[0].day.mintemp_f));

          //Degree Switch
          degree.addEventListener("change", function () {
            console.log(getSelectedDegree());
            renderData(data);
          });

          //Moon Section
          illumination.innerText = "".concat(data.forecast.forecastday[0].astro.moon_illumination, "%");
          moonPhase.textContent = "".concat(data.forecast.forecastday[0].astro.moon_phase);
          moonset.innerText = data.forecast.forecastday[0].astro.moonset;

          //hourly section
          _context.next = 41;
          return createHourlyInfo(data);
        case 41:
          //daily section
          createDailyInfo(data);
        case 42:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderData.apply(this, arguments);
}
function returnSelectedDegree(celsius, fahrenheit) {
  return getSelectedDegree() == "celsius" ? "".concat(celsius, "\u02DAc") : "".concat(fahrenheit, "\u02DAf"); // if celsius is selected then return celsius else return fahrenheit
}
function getSelectedDegree() {
  return degree.value;
}

/***/ }),

/***/ 18411:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 49746:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 19977:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 197:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 21866:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52739:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyoweatherapp"] = self["webpackChunkyoweatherapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [914], () => (__webpack_require__(44497)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map