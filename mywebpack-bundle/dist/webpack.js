/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// 数组方法\r\nfunction unique(array) {\r\n  var res = [];\r\n  for (var i = 0, len = array.length; i < len; i++) {\r\n      var current = array[i];\r\n      if (res.indexOf(current) === -1) {\r\n          res.push(current)\r\n      }\r\n  }\r\n  return res;\r\n}\r\n\r\nmodule.exports =  {\r\n  unique\r\n}\n\n//# sourceURL=webpack:///./src/array.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 主入口\r\nconst array = __webpack_require__(/*! ./array.js */ \"./src/array.js\");\r\nconst { indexOf, lastIndexOf } = __webpack_require__(/*! ./string.js */ \"./src/string.js\");\r\nconst unique = array.unique;\r\nconsole.log(\"this is loader3\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/string.js":
/*!***********************!*\
  !*** ./src/string.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 字符串操作\r\nconst { createIndexOfFinder } = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\r\nconst indexOf = createIndexOfFinder(1);\r\nconst lastIndexOf = createIndexOfFinder(-1);\r\n\r\nmodule.exports =  {\r\n  indexOf,\r\n  lastIndexOf\r\n}\n\n//# sourceURL=webpack:///./src/string.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 工具函数\r\nfunction createIndexOfFinder(dir) {\r\n  return function(array, item){\r\n      var length = array.length;\r\n      var index = dir > 0 ? 0 : length - 1;\r\n      for (; index >= 0 && index < length; index += dir) {\r\n          if (array[index] === item) return index;\r\n      }\r\n      return -1;\r\n  }\r\n}\r\n\r\nmodule.exports =  {\r\n  createIndexOfFinder\r\n}\n\n//# sourceURL=webpack:///./src/tools.js?");

/***/ })

/******/ });