 (function(modules) {
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
 ({

 "./src/array.js":
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return unique; });\n\r\n// 数组去重\r\nfunction unique(array) {\r\n  var res = [];\r\n  for (var i = 0, len = array.length; i < len; i++) {\r\n      var current = array[i];\r\n      if (res.indexOf(current) === -1) {\r\n          res.push(current)\r\n      }\r\n  }\r\n  return res;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/array.js?");

 }),

 "./src/index.js":
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ \"./src/array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return _array__WEBPACK_IMPORTED_MODULE_0__[\"unique\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ \"./src/string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"indexOf\", function() { return _string__WEBPACK_IMPORTED_MODULE_1__[\"indexOf\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lastIndexOf\", function() { return _string__WEBPACK_IMPORTED_MODULE_1__[\"lastIndexOf\"]; });\n\n// 有属性和方法\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

 }),

 "./src/string.js":
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indexOf\", function() { return indexOf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lastIndexOf\", function() { return lastIndexOf; });\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\r\nconst indexOf = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"createIndexOfFinder\"])(1);\r\nconst lastIndexOf = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"createIndexOfFinder\"])(-1);\r\n\r\n\n\n//# sourceURL=webpack:///./src/string.js?");

 }),

 "./src/tools.js":
 (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIndexOfFinder\", function() { return createIndexOfFinder; });\n// 工具\r\n// 是否数组\r\nfunction isArray(obj) {\r\n  return toString.call(obj) === \"[object Array]\";\r\n}\r\n// 是否对象\r\nfunction isObject(obj) {\r\n  return toString.call(obj) === \"[object Object]\";\r\n}\r\n// 是否为函数\r\nfunction isFunction(obj) {\r\n  return toString.call(obj) === \"[object Function]\";\r\n}\r\n\r\nfunction isString(obj) {\r\n  return toString.call(obj) === \"[object String]\";\r\n}\r\n\r\n// 字符串查找\r\nfunction createIndexOfFinder(dir) {\r\n  return function(array, item){\r\n      var length = array.length;\r\n      var index = dir > 0 ? 0 : length - 1;\r\n      for (; index >= 0 && index < length; index += dir) {\r\n          if (array[index] === item) return index;\r\n      }\r\n      return -1;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/tools.js?");

 })

 });