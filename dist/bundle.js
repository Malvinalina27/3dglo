/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_ourCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ourCommand */ \"./src/modules/ourCommand.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('28 March 2021 15:00');\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.default)(100);\n(0,_modules_ourCommand__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcItem = document.querySelectorAll(['.calc-square', '.calc-count', '.calc-day']);\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcCount = document.querySelector('.calc-count');\n  var calcDay = document.querySelector('.calc-day');\n  var totalValue = document.getElementById('total');\n  calcItem.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      if (elem === calcSquare) {\n        elem.value = elem.value.replace(/[^0-9.]/g, '');\n      } else {\n        elem.value = elem.value.replace(/[^0-9]/g, '');\n      }\n    });\n  });\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target; // сброс значений\n\n    if (calcType.options[calcType.selectedIndex].matches('.calc-option-title')) {\n      calcDay.value = '';\n      calcCount.value = '';\n      calcSquare.value = '';\n    }\n\n    var countSum = function countSum() {\n      var total = 0;\n      var countValue = 1;\n      var dayValue = 1;\n      var typeValue = calcType.options[calcType.selectedIndex].value;\n      var squareValue = +calcSquare.value;\n\n      if (calcCount.value > 1) {\n        countValue += (calcCount.value - 1) / 10;\n      }\n\n      if (calcDay.value && calcDay.value < 5) {\n        dayValue *= 2;\n      } else if (calcDay.value && calcDay.value < 10) {\n        dayValue *= 1.5;\n      }\n\n      if (typeValue && squareValue) {\n        total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);\n      }\n\n      totalValue.textContent = total;\n    };\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      dateStop: dateStop,\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining < 0) {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n      clearInterval(1);\n    } else {\n      timerHours.textContent = timer.hours;\n      if (timer.hours < 10) timerHours.textContent = '0' + timer.hours;\n      timerMinutes.textContent = timer.minutes;\n      if (timer.minutes < 10) timerMinutes.textContent = '0' + timer.minutes;\n      timerSeconds.textContent = timer.seconds;\n      if (timer.seconds < 10) timerSeconds.textContent = '0' + timer.seconds;\n    }\n  }\n\n  updateClock();\n  setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar form = function form() {\n  document.addEventListener(\"input\", function (event) {\n    event.preventDefault();\n    var name = document.querySelectorAll('[name=\"user_name\"]');\n    var email = document.querySelectorAll('[name=\"user_email\"]');\n    var phone = document.querySelectorAll('[name=\"user_phone\"]');\n    var target = event.target;\n\n    var regularValid = function regularValid() {\n      target.value = target.value.replace(/ +/g, ' ');\n      target.value = target.value.replace(/-+/g, '-');\n      target.value = target.value.replace(/^-|-$/g, '');\n      target.value = target.value.trim();\n    };\n\n    if (target.matches(\"#form2-message\")) {\n      // eslint-disable-next-line no-useless-escape\n      target.value = target.value.replace(/[^а-яё\\-\\ ,.!?][^0-9]/gi, '');\n      target.addEventListener('blur', function () {\n        regularValid();\n      }, true);\n    }\n\n    name.forEach(function (item) {\n      if (target === item) {\n        // eslint-disable-next-line no-useless-escape\n        target.value = target.value.replace(/[^а-яё\\ ]/gi, '');\n        item.addEventListener('blur', function () {\n          regularValid();\n          target.value = target.value.split(' ').map(function (word) {\n            return word[0].toUpperCase() + word.substring(1);\n          }).join(' ');\n        }, true);\n      }\n    });\n    email.forEach(function (item) {\n      if (target === item) {\n        target.value = target.value.replace(/[^a-z@\\-_.!~*']/gi, '');\n        item.addEventListener('blur', function () {\n          regularValid();\n        }, true);\n      }\n    });\n    phone.forEach(function (item) {\n      if (target === item) {\n        maskPhone('.form-phone'), true;\n      }\n    });\n  }); // маска для телефона\n\n  function maskPhone(selector) {\n    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';\n    var elems = document.querySelectorAll(selector);\n\n    function mask(event) {\n      var keyCode = event.keyCode;\n      var template = masked,\n          def = template.replace(/\\D/g, \"\"),\n          val = this.value.replace(/\\D/g, \"\");\n      var i = 0,\n          newValue = template.replace(/[_\\d]/g, function (a) {\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n      });\n      i = newValue.indexOf(\"_\");\n\n      if (i !== -1) {\n        newValue = newValue.slice(0, i);\n      }\n\n      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n        return \"\\\\d{1,\" + a.length + \"}\";\n      }).replace(/[+()]/g, \"\\\\$&\");\n      reg = new RegExp(\"^\" + reg + \"$\"); //\n\n      if (!reg.test(this.value) || this.value.length < 18 || keyCode > 47 && keyCode < 58) {\n        this.value = newValue;\n      }\n\n      if (event.type === \"blur\" && this.value.length < 13) {\n        this.value = \"\";\n      }\n    }\n\n    var _iterator = _createForOfIteratorHelper(elems),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var elem = _step.value;\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://3dglo/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/ourCommand.js":
/*!***********************************!*\
  !*** ./src/modules/ourCommand.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourCommand = function ourCommand() {\n  var command = document.querySelector('.command');\n  var support;\n  command.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('img')) {\n      support = target.src;\n      target.src = target.dataset.img;\n      target.dataset.img = support;\n    }\n  });\n  command.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('img')) {\n      support = target.src;\n      target.src = target.dataset.img;\n      target.dataset.img = support;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourCommand);\n\n//# sourceURL=webpack://3dglo/./src/modules/ourCommand.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...';\n  var loadMessage = 'Загрузка...';\n  var successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var form = document.querySelectorAll(['#form1', '#form2', '#form3']);\n  var statusMessage = document.createElement('div');\n  statusMessage.classList.add('visible');\n  statusMessage.style.cssText = 'font-size: 2 rem; color: #fff;'; // ajax\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  }; //заполнение формы\n\n\n  form.forEach(function (elem) {\n    elem.addEventListener('submit', function (event) {\n      event.preventDefault();\n      elem.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var input = elem.querySelectorAll('input');\n      var formData = new FormData(elem);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.textContent = successMessage;\n        setTimeout(function () {\n          input.forEach(function (item) {\n            item.value = '';\n          });\n          document.querySelector('.popup').style = 'display:none;';\n          elem.removeChild(statusMessage);\n        }, 3000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          input.forEach(function (item) {\n            item.value = '';\n          });\n          elem.removeChild(statusMessage);\n        }, 3000);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar slider = function slider() {\n  var slider = document.querySelector('.portfolio-content');\n  var slide = document.querySelectorAll('.portfolio-item');\n  var portfolioDots = document.querySelector('.portfolio-dots'); // создание dots в portfolioDots\n\n  var getListContent = function getListContent() {\n    var result = [];\n\n    for (var i = 1; i <= slide.length; i++) {\n      var li = document.createElement('li');\n      li.className = 'dot';\n\n      if (li === slide.length) {\n        li.className = 'dot dot-active';\n      }\n\n      result.push(li);\n    }\n\n    return result;\n  };\n\n  portfolioDots.append.apply(portfolioDots, _toConsumableArray(getListContent()));\n  var dot = document.querySelectorAll('.dot');\n  var currentSlide = 0;\n  var interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault(); // eslint-disable-next-line prefer-const\n\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header');\n  var tab = tabHeader.querySelectorAll('.service-header-tab');\n  var tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'); // само меню\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.body.addEventListener('click', function (e) {\n    var target = e.target;\n    console.log(target);\n\n    if (target.classList.contains('close-btn') || target.closest('li>a') || target.closest('.menu')) {\n      handlerMenu();\n    }\n    /* else if (target.tagName !== 'MENU') {\r\n    menu.classList.remove('active-menu');\r\n    } */\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var popupContent = document.querySelector('.popup-content');\n  var width = document.documentElement.clientWidth; //ширина экрана\n  //animation popupContent\n\n  function animate(_ref) {\n    var duration = _ref.duration,\n        timing = _ref.timing,\n        draw = _ref.draw;\n    var start = performance.now();\n    requestAnimationFrame(function animate(time) {\n      var timeFraction = (time - start) / duration;\n      if (timeFraction > 1) timeFraction = 1;\n      var progress = timing(timeFraction);\n      draw(progress);\n\n      if (timeFraction < 1) {\n        requestAnimationFrame(animate);\n      }\n    });\n  } //click on popupBtn\n\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (width < 768) {\n        cancelAnimationFrame(animate);\n      } else {\n        animate({\n          duration: 500,\n          timing: function timing(timeFraction) {\n            return timeFraction;\n          },\n          draw: function draw(progress) {\n            popupContent.style.left = progress * (width / 2.5) + 'px';\n          }\n        });\n      }\n    });\n  }); //popup\n\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopUp.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;