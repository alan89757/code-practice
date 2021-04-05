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
eval(`// 数组方法
function unique(array) {
  var res = [];

  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];

    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }

  return res;
}

module.exports = {
  unique
};`);

}),


"./src/tools.js":
(function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(`// 工具函数
function createIndexOfFinder(dir) {
  return function (array, item) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (array[index] === item) return index;
    }

    return -1;
  };
}

module.exports = {
  createIndexOfFinder
};`);

}),


"./src/string.js":
(function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(`// 字符串操作
const {
  createIndexOfFinder
} = __webpack_require__("./src/tools.js");

const indexOf = createIndexOfFinder(1);
const lastIndexOf = createIndexOfFinder(-1);
module.exports = {
  indexOf,
  lastIndexOf
};`);

}),


"./src/index.js":
(function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(`// 主入口
const array = __webpack_require__("./src/array.js");

const {
  indexOf,
  lastIndexOf
} = __webpack_require__("./src/string.js");

const unique = array.unique;
console.log("this is loader3");`);

}),

 

});