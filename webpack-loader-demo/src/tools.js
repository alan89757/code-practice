// 工具
// 是否数组
function isArray(obj) {
  return toString.call(obj) === "[object Array]";
}
// 是否对象
function isObject(obj) {
  return toString.call(obj) === "[object Object]";
}
// 是否为函数
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
}

function isString(obj) {
  return toString.call(obj) === "[object String]";
}

// 字符串查找
function createIndexOfFinder(dir) {
  return function(array, item){
      var length = array.length;
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
          if (array[index] === item) return index;
      }
      return -1;
  }
}

export {
  isArray,
  isObject,
  isFunction,
  isString,
  createIndexOfFinder
}