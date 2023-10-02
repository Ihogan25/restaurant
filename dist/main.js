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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n\n\nlet contact = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.title)('Contact');\n\nlet pOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subOne ,pOne)\n\nlet pTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subTwo, pTwo)\n\nlet pThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardThree= (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subThree, pThree)\n\n\nlet contactInfo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.div)(contact, cardOne, cardTwo, cardThree);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactInfo);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAll: () => (/* binding */ addAll),\n/* harmony export */   button: () => (/* binding */ button),\n/* harmony export */   card: () => (/* binding */ card),\n/* harmony export */   div: () => (/* binding */ div),\n/* harmony export */   p: () => (/* binding */ p),\n/* harmony export */   removeContent: () => (/* binding */ removeContent),\n/* harmony export */   subTitle: () => (/* binding */ subTitle),\n/* harmony export */   title: () => (/* binding */ title)\n/* harmony export */ });\n\n\n\n\nconst button = (name) => {\n    let btn = document.createElement('button');\n    btn.classList.add('btn');\n    btn.textContent = name;\n    return btn;\n}\n\n\nconst title = (titleName) => {\n    let h1 = document.createElement('h1');\n    h1.classList.add('title')\n    h1.textContent = titleName;\n    return h1;\n\n}\n\nconst subTitle = (titleName) => {\n    let h2 = document.createElement('h2');\n    h2.classList.add('subTitle')\n    h2.textContent = titleName;\n    return h2;\n}\n\n\nconst card = (head, para) => {\n    let div = document.createElement('div');\n    div.classList.add('card')\n    div.appendChild(head)\n    div.appendChild(para);\n    return div;\n}\n\n\n\nconst p = (info) => {\n    let p = document.createElement('p');\n    p.textContent = info;\n    return p\n}\n\n\nconst div = (...elements) => {\n    let div = document.createElement('div');\n    div.classList.add('contaier')\n    let elmns = [...elements];\n    for(let i = 0; i < elmns.length; i++) {\n        div.appendChild(elmns[i])\n    }\n    return div\n\n}\n\nconst addAll = (parent ,arr) => {\n    for(let i = 0; i < arr.length; i++) {\n        parent.appendChild(arr[i]);\n    }\n}\n\n\nconst removeContent = (parent) => {\n    if(parent.children.length > 1) {\n        parent.removeChild(parent.lastChild)\n    } \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/elements.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n\n\nlet home = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.title)('Home');\n\nlet pOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subOne ,pOne)\n\nlet pTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subTwo, pTwo)\n\nlet pThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardThree= (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subThree, pThree)\n\n\nlet mainContent = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.div)(home, cardOne, cardTwo, cardThree);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainContent);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\n\n\nconst content = document.getElementById('content')\n\n\nlet buttonOne = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.button)('Home')\nlet buttonTwo = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.button)('Menu')\nlet buttonThree = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.button)('Contact')\nconst buttons = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.div)(buttonOne, buttonTwo, buttonThree);\ncontent.appendChild(buttons)\ncontent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\nlet domBtns = [buttonOne, buttonTwo, buttonThree];\nconsole.log(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n// const populate = (page) => {\n\n//     if(page.textContent == 'Home') {\n//         console.log(mainContent)\n//         content.appendChild(mainContent)\n//     }\n//     else if(page.textContent == 'Menu') {\n//         console.log(menuInfo)\n//         content.appendChild(menuInfo)\n//     }\n//     else {\n//         console.log(contactInfo)\n//         content.appendChild(contactInfo)\n//     }\n\n// }\n\n\ndomBtns.forEach( btn => {\n    btn.addEventListener('click', ()=> {\n        ;(0,_elements__WEBPACK_IMPORTED_MODULE_0__.removeContent)(content);\n        if(btn.textContent == 'Home') {\n            console.log(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n            content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n        }\n        else if(btn.textContent == 'Menu') {\n            console.log(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n            content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        }\n        else {\n            console.log(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n            content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        }\n    })\n})\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n\n\nlet menu = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.title)('Menu');\n\nlet pOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardOne = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subOne ,pOne)\n\nlet pTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardTwo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subTwo, pTwo)\n\nlet pThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.p)('dewifieuw f ifiaeihf iwef wifiawhf iwhe fiwf wiehfiwf aiwe fweah fhweihhfiewfia  ef hawi fiwaehfi awfihieafh iewfh iwwfgoeskgro ero gog korka gogkaowe gr')\nlet subThree = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.subTitle)('Ehakdnw')\nlet cardThree= (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.card)(subThree, pThree)\n\n\nlet menuInfo = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.div)(menu, cardOne, cardTwo, cardThree);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuInfo);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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