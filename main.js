/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/DOM.js":
      /*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLogo: () => (/* binding */ createLogo),\n/* harmony export */   createWeatherHeader: () => (/* binding */ createWeatherHeader)\n/* harmony export */ });\n// dom.js\n\nfunction createLogo() {\n  var logo = document.createElement("div");\n  logo.className = "logo";\n  return logo;\n}\nfunction createWeatherHeader(updateWeatherUnits) {\n  var weatherHeader = document.createElement("div");\n  weatherHeader.className = "weather__header";\n  var searchForm = document.createElement("form");\n  searchForm.className = "weather__search";\n  var input = document.createElement("input");\n  input.setAttribute("type", "text");\n  input.setAttribute("placeholder", "Search for a city...");\n  input.className = "weather__searchform";\n  var searchIcon = document.createElement("i");\n  searchIcon.className = "fa-solid fa-magnifying-glass";\n  searchForm.appendChild(input);\n  searchForm.appendChild(searchIcon);\n  var weatherUnits = document.createElement("div");\n  weatherUnits.className = "weather__units";\n  var unitCelsius = document.createElement("span");\n  unitCelsius.className = "weather_unit_celsius active";\n  unitCelsius.innerHTML = "&#176C";\n  unitCelsius.addEventListener("click", function () {\n    return updateWeatherUnits("metric");\n  });\n  var unitFahrenheit = document.createElement("span");\n  unitFahrenheit.className = "weather_unit_farenheit";\n  unitFahrenheit.innerHTML = "&#176F";\n  unitFahrenheit.addEventListener("click", function () {\n    return updateWeatherUnits("imperial");\n  });\n  weatherUnits.appendChild(unitCelsius);\n  weatherUnits.appendChild(unitFahrenheit);\n  weatherHeader.appendChild(searchForm);\n  weatherHeader.appendChild(weatherUnits);\n  return weatherHeader;\n}\n\n//# sourceURL=webpack://weatherwizz/./src/DOM.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");\n/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAPI.js */ "./src/weatherAPI.js");\n/* harmony import */ var _weatherdataDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherdataDOM.js */ "./src/weatherdataDOM.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }\n// index.js\n\n\n\n\n\nvar mainContainer = document.querySelector(".main-container");\nvar subContainer = document.createElement("div");\nsubContainer.className = "container";\nvar currentCity = "new york";\nvar currentUnit = "metric";\ndocument.addEventListener("DOMContentLoaded", initializeApp);\nfunction initializeApp() {\n  return _initializeApp.apply(this, arguments);\n}\nfunction _initializeApp() {\n  _initializeApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          subContainer.appendChild((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.createLogo)());\n          subContainer.appendChild((0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.createWeatherHeader)(updateWeatherUnits));\n          mainContainer.appendChild(subContainer);\n          setupEventListeners();\n          if (!currentCity) {\n            _context.next = 7;\n            break;\n          }\n          _context.next = 7;\n          return updateWeather(currentCity, currentUnit);\n        case 7:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _initializeApp.apply(this, arguments);\n}\nfunction setupEventListeners() {\n  var searchForm = document.querySelector(".weather__search");\n  searchForm.addEventListener("submit", handleSearch);\n  var searchInput = document.querySelector(".weather__searchform");\n  searchInput.addEventListener("keydown", function (event) {\n    if (event.key === "Enter") {\n      event.preventDefault();\n      handleSearch(event);\n    }\n  });\n}\nfunction updateWeather(_x, _x2) {\n  return _updateWeather.apply(this, arguments);\n}\nfunction _updateWeather() {\n  _updateWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city, unit) {\n    var data;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return (0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData)(city);\n        case 3:\n          data = _context2.sent;\n          if (data) {\n            updateWeatherUI(data, unit);\n            toggleUnitActiveClass(unit);\n          }\n          _context2.next = 10;\n          break;\n        case 7:\n          _context2.prev = 7;\n          _context2.t0 = _context2["catch"](0);\n          console.error("Error fetching weather data:", _context2.t0);\n        case 10:\n        case "end":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[0, 7]]);\n  }));\n  return _updateWeather.apply(this, arguments);\n}\nfunction handleSearch(_x3) {\n  return _handleSearch.apply(this, arguments);\n}\nfunction _handleSearch() {\n  _handleSearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {\n    var searchInput, city;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          event.preventDefault();\n          searchInput = document.querySelector(".weather__searchform");\n          city = searchInput.value.trim();\n          searchInput.value = "";\n          if (!city) {\n            _context3.next = 8;\n            break;\n          }\n          currentCity = city;\n          _context3.next = 8;\n          return updateWeather(city, currentUnit);\n        case 8:\n        case "end":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return _handleSearch.apply(this, arguments);\n}\nfunction updateWeatherUnits(_x4) {\n  return _updateWeatherUnits.apply(this, arguments);\n}\nfunction _updateWeatherUnits() {\n  _updateWeatherUnits = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(unit) {\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          currentUnit = unit;\n          _context4.next = 3;\n          return updateWeather(currentCity, unit);\n        case 3:\n        case "end":\n          return _context4.stop();\n      }\n    }, _callee4);\n  }));\n  return _updateWeatherUnits.apply(this, arguments);\n}\nfunction updateWeatherUI(data, unit) {\n  clearExistingWeatherElements();\n  var weatherCard = (0,_weatherdataDOM_js__WEBPACK_IMPORTED_MODULE_3__.createWeatherCard)(data, unit);\n  var weatherInfo = (0,_weatherdataDOM_js__WEBPACK_IMPORTED_MODULE_3__.createWeatherInfo)(data, unit);\n  subContainer.appendChild(weatherCard);\n  subContainer.appendChild(weatherInfo);\n}\nfunction clearExistingWeatherElements() {\n  var existingWeatherCard = subContainer.querySelector(".cardContainer");\n  var existingWeatherInfo = subContainer.querySelector(".weather__info");\n  if (existingWeatherCard) subContainer.removeChild(existingWeatherCard);\n  if (existingWeatherInfo) subContainer.removeChild(existingWeatherInfo);\n}\nfunction toggleUnitActiveClass(unit) {\n  var unitCelsius = document.querySelector(".weather_unit_celsius");\n  var unitFahrenheit = document.querySelector(".weather_unit_farenheit");\n  if (unit === "metric") {\n    unitCelsius.classList.add("active");\n    unitFahrenheit.classList.remove("active");\n  } else {\n    unitCelsius.classList.remove("active");\n    unitFahrenheit.classList.add("active");\n  }\n}\n\n//# sourceURL=webpack://weatherwizz/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/weatherAPI.js":
      /*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)\n/* harmony export */ });\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }\n// weatherAPI.js\nvar API_KEY = "b1089ba324104bd3a0d145553242006";\nvar API_URL = "https://api.weatherapi.com/v1";\nfunction fetchWeatherData(_x) {\n  return _fetchWeatherData.apply(this, arguments);\n}\nfunction _fetchWeatherData() {\n  _fetchWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {\n    var url, response, data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          url = "".concat(API_URL, "/current.json?key=").concat(API_KEY, "&q=").concat(city);\n          _context.prev = 1;\n          _context.next = 4;\n          return fetch(url);\n        case 4:\n          response = _context.sent;\n          if (response.ok) {\n            _context.next = 7;\n            break;\n          }\n          throw new Error("Weather data not available");\n        case 7:\n          _context.next = 9;\n          return response.json();\n        case 9:\n          data = _context.sent;\n          return _context.abrupt("return", data);\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context["catch"](1);\n          console.error("Error fetching weather data:", _context.t0);\n          alert("Please ensure the city name is correct.");\n          return _context.abrupt("return", null);\n        case 18:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _fetchWeatherData.apply(this, arguments);\n}\n\n//# sourceURL=webpack://weatherwizz/./src/weatherAPI.js?'
        );

        /***/
      },

    /***/ "./src/weatherIcons.js":
      /*!*****************************!*\
  !*** ./src/weatherIcons.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherIcon: () => (/* binding */ getWeatherIcon)\n/* harmony export */ });\n// weatherIcons.js\n\nfunction getWeatherIcon(condition, isDay) {\n  switch (condition.toLowerCase()) {\n    case "sunny":\n      return isDay ? "fas fa-sun" : "fas fa-moon";\n    case "clear":\n      return isDay ? "fas fa-sun" : "fas fa-moon";\n    case "partly cloudy":\n      return isDay ? "fas fa-cloud-sun" : "fas fa-cloud-moon";\n    case "cloudy":\n      return "fas fa-cloud";\n    case "overcast":\n      return "fas fa-cloud-sun";\n    case "mist":\n      return "fas fa-smog";\n    case "patchy rain possible":\n      return "fas fa-cloud-showers-heavy";\n    case "patchy snow possible":\n      return "fas fa-snowflake";\n    case "patchy sleet possible":\n      return "fas fa-snowflake";\n    case "patchy freezing drizzle possible":\n      return "fas fa-snowflake";\n    case "thundery outbreaks possible":\n      return "fas fa-bolt";\n    case "blowing snow":\n      return "fas fa-snowflake";\n    case "blizzard":\n      return "fas fa-snowflake";\n    case "fog":\n      return "fas fa-smog";\n    case "freezing fog":\n      return "fas fa-snowflake";\n    case "patchy light drizzle":\n      return "fas fa-cloud-showers-heavy";\n    case "light drizzle":\n      return "fas fa-cloud-showers-heavy";\n    case "freezing drizzle":\n      return "fas fa-snowflake";\n    case "heavy freezing drizzle":\n      return "fas fa-snowflake";\n    case "patchy light rain":\n      return "fas fa-cloud-showers-heavy";\n    case "light rain":\n      return "fas fa-cloud-showers-heavy";\n    case "moderate rain at times":\n      return "fas fa-cloud-showers-heavy";\n    case "moderate rain":\n      return "fas fa-cloud-showers-heavy";\n    case "heavy rain at times":\n      return "fas fa-cloud-showers-heavy";\n    case "heavy rain":\n      return "fas fa-cloud-showers-heavy";\n    case "light freezing rain":\n      return "fas fa-snowflake";\n    case "moderate or heavy freezing rain":\n      return "fas fa-snowflake";\n    case "light sleet":\n      return "fas fa-snowflake";\n    case "moderate or heavy sleet":\n      return "fas fa-snowflake";\n    case "patchy light snow":\n      return "fas fa-snowflake";\n    case "light snow":\n      return "fas fa-snowflake";\n    case "patchy moderate snow":\n      return "fas fa-snowflake";\n    case "moderate snow":\n      return "fas fa-snowflake";\n    case "patchy heavy snow":\n      return "fas fa-snowflake";\n    case "heavy snow":\n      return "fas fa-snowflake";\n    case "ice pellets":\n      return "fas fa-snowflake";\n    case "light rain shower":\n      return "fas fa-cloud-showers-heavy";\n    case "moderate or heavy rain shower":\n      return "fas fa-cloud-showers-heavy";\n    case "torrential rain shower":\n      return "fas fa-cloud-showers-heavy";\n    case "light sleet showers":\n      return "fas fa-snowflake";\n    case "moderate or heavy sleet showers":\n      return "fas fa-snowflake";\n    case "light snow showers":\n      return "fas fa-snowflake";\n    case "moderate or heavy snow showers":\n      return "fas fa-snowflake";\n    case "light showers of ice pellets":\n      return "fas fa-snowflake";\n    case "moderate or heavy showers of ice pellets":\n      return "fas fa-snowflake";\n    case "patchy light rain with thunder":\n      return "fas fa-bolt";\n    case "moderate or heavy rain with thunder":\n      return "fas fa-bolt";\n    case "patchy light snow with thunder":\n      return "fas fa-bolt";\n    case "moderate or heavy snow with thunder":\n      return "fas fa-bolt";\n    default:\n      return "fas fa-question-circle";\n    // Default icon for unknown conditions\n  }\n}\n\n//# sourceURL=webpack://weatherwizz/./src/weatherIcons.js?'
        );

        /***/
      },

    /***/ "./src/weatherdataDOM.js":
      /*!*******************************!*\
  !*** ./src/weatherdataDOM.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeatherCard: () => (/* binding */ createWeatherCard),\n/* harmony export */   createWeatherInfo: () => (/* binding */ createWeatherInfo)\n/* harmony export */ });\n/* harmony import */ var _weatherIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherIcons */ "./src/weatherIcons.js");\n// weatherdataDOM.js\n\n\nfunction createWeatherCard(data, unit) {\n  var weatherCard = document.createElement("div");\n  weatherCard.className = "cardContainer";\n  var card = document.createElement("div");\n  card.className = "card";\n  var city = document.createElement("p");\n  city.className = "city";\n  city.textContent = "".concat(data.location.name, ", ").concat(data.location.country);\n  card.appendChild(city);\n  var weather = document.createElement("p");\n  weather.className = "weather";\n  weather.textContent = data.current.condition.text.toUpperCase();\n  card.appendChild(weather);\n  var icon = document.createElement("i");\n  icon.className = (0,_weatherIcons__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon)(data.current.condition.text, data.current.is_day);\n  card.appendChild(icon);\n  var temp = document.createElement("p");\n  temp.className = "temp";\n  if (unit === "metric") {\n    temp.textContent = "".concat(Math.round(data.current.temp_c), "\\xB0C");\n  } else {\n    temp.textContent = "".concat(Math.round(data.current.temp_f), "\\xB0F");\n  }\n  card.appendChild(temp);\n  weatherCard.appendChild(card);\n  return weatherCard;\n}\nfunction createWeatherInfo(data, unit) {\n  var weatherInfo = document.createElement("div");\n  weatherInfo.className = "weather__info";\n  var realFeel = createWeatherInfoCard("fa-temperature-full", "Real Feel", unit === "metric" ? "".concat(Math.round(data.current.feelslike_c), "\\xB0C") : "".concat(Math.round(data.current.feelslike_f), "\\xB0F"));\n  weatherInfo.appendChild(realFeel);\n  var humidity = createWeatherInfoCard("fa-droplet", "Humidity", "".concat(data.current.humidity, "%"));\n  weatherInfo.appendChild(humidity);\n  var wind = createWeatherInfoCard("fa-wind", "Wind", unit === "metric" ? "".concat(data.current.wind_kph, " kph") : "".concat(data.current.wind_mph, " mph"));\n  weatherInfo.appendChild(wind);\n  var pressure = createWeatherInfoCard("fa-gauge-high", "Pressure", "".concat(data.current.pressure_mb, " hPa"));\n  weatherInfo.appendChild(pressure);\n  return weatherInfo;\n}\nfunction createWeatherInfoCard(iconClass, label, value) {\n  var card = document.createElement("div");\n  card.className = "weather__card";\n  var icon = document.createElement("i");\n  icon.className = "fa-solid ".concat(iconClass);\n  card.appendChild(icon);\n  var textContainer = document.createElement("div");\n  var labelElem = document.createElement("p");\n  labelElem.textContent = label;\n  var valueElem = document.createElement("p");\n  valueElem.className = "weather__".concat(label.toLowerCase().replace(" ", ""));\n  valueElem.innerHTML = value;\n  textContainer.appendChild(labelElem);\n  textContainer.appendChild(valueElem);\n  card.appendChild(textContainer);\n  return card;\n}\n\n//# sourceURL=webpack://weatherwizz/./src/weatherdataDOM.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n/* css Start */\r\n:root {\r\n  --blue: #3a8b8e;\r\n  --orange: #f1b457;\r\n  --cream: #f3e7db;\r\n  --red: #ce4b43;\r\n  --pink: #e395a1;\r\n  --lightblue: #4bb7c9;\r\n}\r\nbody {\r\n  overflow: auto;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background: #fcf6f0;\r\n}\r\n/* Main container */\r\n.main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n  background-color: var(--cream);\r\n}\r\n\r\n.container {\r\n  background-color: var(--cream);\r\n  color: var(--red);\r\n  padding: 2rem;\r\n  width: 80vw;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 2rem;\r\n  border-radius: 1%;\r\n}\r\n\r\n.logo {\r\n  background: var(--cream) url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center/cover no-repeat;\r\n  height: 10rem;\r\n  width: 10rem;\r\n  margin-top: -7rem;\r\n  border-radius: 50%;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);\r\n  border: 0.02rem dashed var(--red);\r\n}\r\n\r\n/* Weather header */\r\n.weather__header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.weather__search {\r\n  position: relative;\r\n  margin-right: auto;\r\n  width: 100%;\r\n}\r\n.weather-icon {\r\n  width: 100px;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n.weather__searchform {\r\n  background: var(--cream);\r\n  border: 0.15rem dashed var(--red);\r\n  outline: none;\r\n  color: var(--red);\r\n  padding: 0.8rem 5rem;\r\n  border-radius: 10px;\r\n  min-width: 400px;\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  width: 200px;\r\n  transition: font-size 0.1s ease-in-out;\r\n}\r\n\r\n.weather__searchform:focus {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.weather__search i {\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 1rem;\r\n  color: var(--red);\r\n  cursor: pointer;\r\n}\r\n\r\n.weather__units {\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.weather_unit_celsius,\r\n.weather_unit_farenheit {\r\n  margin-left: 1rem;\r\n  margin-right: 2rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.weather_unit_celsius:hover,\r\n.weather_unit_farenheit:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Card Container */\r\n\r\n.cardContainer {\r\n  width: fit-content;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 9;\r\n  margin-top: 2rem;\r\n}\r\n.cardContainer::before {\r\n  width: 7rem;\r\n  height: 7rem;\r\n  content: "";\r\n  position: absolute;\r\n  background-color: var(--lightblue);\r\n  z-index: -1;\r\n  border-radius: 50%;\r\n  left: 50rem;\r\n  top: 3rem;\r\n  transition: all 1s;\r\n}\r\n\r\n.cardContainer:hover::before {\r\n  transform: translate(-50%, 50%);\r\n}\r\n.card {\r\n  position: relative;\r\n  width: 60vw;\r\n  height: 30rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px 10px;\r\n  border-radius: 10px;\r\n\r\n  background: rgba(243, 231, 219, 0.7);\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);\r\n  backdrop-filter: blur(15.5px);\r\n  -webkit-backdrop-filter: blur(15.5px);\r\n  border-radius: 10px;\r\n  border: 1px solid rgba(255, 255, 255, 0.18);\r\n}\r\n\r\n.city {\r\n  font-weight: 700;\r\n  font-size: 3rem;\r\n  letter-spacing: 1.2px;\r\n  color: var(--red);\r\n}\r\n\r\n.weather {\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  color: var(--red);\r\n}\r\n\r\n.weather-1 {\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  color: var(--red);\r\n}\r\n\r\n.temp {\r\n  font-size: 4rem;\r\n  color: var(--red);\r\n  font-weight: bold;\r\n}\r\n\r\n.minmaxContainer {\r\n  width: 15%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--red);\r\n  font-size: 1.2rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.min,\r\n.max {\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.max {\r\n  border-left: 2px solid var(--red);\r\n}\r\n\r\n.maxHeading,\r\n.minHeading {\r\n  color: var(--red);\r\n}\r\n\r\n.maxTemp,\r\n.minTemp {\r\n  color: var(--red);\r\n}\r\n\r\n/* Weather info cards */\r\n.weather__info {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.weather__card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  background-color: var(--cream);\r\n  padding: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);\r\n  min-width: 15vw;\r\n  flex-basis: calc(25% - 1rem);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.weather__card i {\r\n  font-size: 2.8rem;\r\n  margin-bottom: 0.5rem;\r\n  color: var(--red);\r\n}\r\n\r\n.weather__card p {\r\n  font-size: 1.5rem;\r\n  color: var(--red);\r\n  font-weight: bold;\r\n  margin: 0 0.5rem;\r\n  text-align: center;\r\n}\r\n\r\n/* media */\r\n/* \r\n  ##Device = Desktops\r\n  ##Screen = 1281px to max-width: 1483px\r\n*/\r\n\r\n@media (min-width: 1281px) and (max-width: 1520px) {\r\n  .main-container {\r\n    padding: 3rem;\r\n  }\r\n  .container {\r\n    width: 80vw;\r\n    margin: 4rem;\r\n    background-color: var(--cream);\r\n  }\r\n  .weather__searchform {\r\n    font-size: 1rem;\r\n    width: 300px;\r\n  }\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    margin-left: 1rem;\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n  }\r\n  .card {\r\n    width: 50vw;\r\n    height: 22rem;\r\n  }\r\n  .city {\r\n    font-size: 2.5rem;\r\n  }\r\n  .temp {\r\n    font-size: 3.5rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 20%;\r\n  }\r\n  .min,\r\n  .max {\r\n    padding: 0px 30px;\r\n  }\r\n  .weather__card {\r\n    min-width: 15vw;\r\n  }\r\n  .weather__card i {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .weather__card p {\r\n    font-size: 1.2rem;\r\n    color: var(--red);\r\n  }\r\n  .cardContainer {\r\n    margin-top: 1.5rem;\r\n  }\r\n  .cardContainer::before {\r\n    left: 30rem;\r\n    top: 3rem;\r\n  }\r\n}\r\n\r\n/* \r\n  ##Device = Laptops, Desktops\r\n  ##Screen = B/w 1025px to 1280px\r\n*/\r\n\r\n@media (min-width: 1025px) and (max-width: 1280px) {\r\n  .main-container {\r\n    padding: 3rem;\r\n  }\r\n  .container {\r\n    width: 80vw;\r\n    margin: 4rem;\r\n    background-color: var(--cream);\r\n  }\r\n  .weather__searchform {\r\n    font-size: 1rem;\r\n    width: 300px;\r\n  }\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    margin-left: 1rem;\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n  }\r\n  .card {\r\n    width: 50vw;\r\n    height: 22rem;\r\n  }\r\n  .city {\r\n    font-size: 2.5rem;\r\n  }\r\n  .temp {\r\n    font-size: 3.5rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 20%;\r\n  }\r\n  .weather__card {\r\n    min-width: 12vw;\r\n  }\r\n  .weather__card i {\r\n    font-size: 2rem;\r\n  }\r\n  .min,\r\n  .max {\r\n    padding: 0px 30px;\r\n  }\r\n  .weather__card p {\r\n    font-size: 1.2rem;\r\n    color: var(--red);\r\n  }\r\n  .cardContainer {\r\n    margin-top: 1.5rem;\r\n  }\r\n  .cardContainer::before {\r\n    left: 20rem;\r\n    top: 3rem;\r\n  }\r\n}\r\n\r\n/* \r\n  ##Device = Tablets, Ipads (portrait)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) {\r\n  .main-container {\r\n    padding: 3rem;\r\n  }\r\n  .container {\r\n    width: 80vw;\r\n    margin: 3rem;\r\n    background-color: var(--cream);\r\n  }\r\n  .weather__searchform {\r\n    font-size: 1rem;\r\n    width: 300px;\r\n  }\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    margin-left: 1rem;\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n  }\r\n  .card {\r\n    width: 50vw;\r\n    height: 22rem;\r\n  }\r\n  .city {\r\n    font-size: 2.5rem;\r\n  }\r\n  .temp {\r\n    font-size: 3.5rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 20%;\r\n  }\r\n  .weather__card {\r\n    min-width: 15vw;\r\n  }\r\n  .weather__card i {\r\n    font-size: 2rem;\r\n  }\r\n  .min,\r\n  .max {\r\n    padding: 0px 30px;\r\n  }\r\n  .weather__card p {\r\n    font-size: 1.2rem;\r\n    color: var(--red);\r\n  }\r\n  .cardContainer {\r\n    margin-top: 1.5rem;\r\n  }\r\n  .cardContainer::before {\r\n    left: 15rem;\r\n    top: 3rem;\r\n  }\r\n}\r\n\r\n/* \r\n  ##Device = Tablets, Ipads (landscape)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\r\n  .main-container {\r\n    padding: 3rem;\r\n  }\r\n  .container {\r\n    width: 80vw;\r\n    margin: 2rem;\r\n    background-color: var(--cream);\r\n  }\r\n  .weather__searchform {\r\n    font-size: 1rem;\r\n    width: 300px;\r\n  }\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    margin-left: 1rem;\r\n    margin-right: 2rem;\r\n    font-size: 2rem;\r\n  }\r\n  .card {\r\n    width: 50vw;\r\n    height: 22rem;\r\n  }\r\n  .city {\r\n    font-size: 2.5rem;\r\n  }\r\n  .temp {\r\n    font-size: 3.5rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 30%;\r\n  }\r\n  .weather__card {\r\n    min-width: 10vw;\r\n  }\r\n  .weather__card i {\r\n    font-size: 2rem;\r\n  }\r\n  .min,\r\n  .max {\r\n    padding: 0px 50px;\r\n  }\r\n  .weather__card p {\r\n    font-size: 1.2rem;\r\n    color: var(--red);\r\n  }\r\n  .cardContainer {\r\n    margin-top: 1.5rem;\r\n  }\r\n  .cardContainer::before {\r\n    left: 10rem;\r\n    top: 3rem;\r\n  }\r\n}\r\n\r\n/* \r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n\r\n@media (min-width: 481px) and (max-width: 767px) {\r\n  .container {\r\n    width: 90vw;\r\n    margin: 1.5rem;\r\n  }\r\n  .weather__searchform {\r\n    font-size: 0.9rem;\r\n    width: 180px;\r\n  }\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    font-size: 1.6rem;\r\n  }\r\n  .weather__info {\r\n    align-self: center;\r\n  }\r\n  .weather__card {\r\n    min-width: 70vw;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .city {\r\n    font-size: 2.5rem;\r\n  }\r\n  .temp {\r\n    font-size: 3.5rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 30%;\r\n  }\r\n  .weather__card {\r\n    min-width: 22vw;\r\n  }\r\n}\r\n/* \r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n  body {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow: auto;\r\n  }\r\n\r\n  .logo {\r\n    height: 8rem;\r\n    width: 8rem;\r\n    margin-top: -6rem;\r\n  }\r\n  .main-container {\r\n    padding: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: auto;\r\n  }\r\n\r\n  .weather__header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .container {\r\n    width: 90vw;\r\n    margin: 3rem;\r\n    background-color: var(--cream);\r\n  }\r\n  .weather__searchform {\r\n    font-size: 1rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 75vw;\r\n    margin: 1rem auto;\r\n    min-width: 10px;\r\n    color: var(--red);\r\n    padding: 0.8rem 3rem;\r\n    height: 3rem;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .weather__searchform:focus {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .weather__search i {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-size: 1rem;\r\n    color: var(--red);\r\n  }\r\n\r\n  .weather_unit_celsius,\r\n  .weather_unit_farenheit {\r\n    margin-left: 1rem;\r\n    margin-right: 2rem;\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .card {\r\n    width: 70vw;\r\n    height: 20rem;\r\n  }\r\n  .city {\r\n    font-size: 2rem;\r\n  }\r\n  .temp {\r\n    font-size: 3rem;\r\n  }\r\n  .minmaxContainer {\r\n    width: 50%;\r\n  }\r\n  .weather__card {\r\n    min-width: 70vw;\r\n    justify-content: center;\r\n  }\r\n  .weather__card i {\r\n    font-size: 2rem;\r\n  }\r\n  .min,\r\n  .max {\r\n    padding: 0px 30px;\r\n  }\r\n  .weather__card p {\r\n    font-size: 1.2rem;\r\n    color: var(--red);\r\n  }\r\n  .cardContainer {\r\n    margin-top: 1.5rem;\r\n  }\r\n  .cardContainer::before {\r\n    left: 7rem;\r\n    top: 3rem;\r\n  }\r\n}\r\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherwizz/./src/style.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherwizz/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weatherwizz/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherwizz/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherwizz/./src/style.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherwizz/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/assets/logo.png":
      /*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "5787c0474f0cbf94cf22.png";\n\n//# sourceURL=webpack://weatherwizz/./src/assets/logo.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
