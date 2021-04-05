// 字符串操作
const { createIndexOfFinder } = require("./tools.js");
const indexOf = createIndexOfFinder(1);
const lastIndexOf = createIndexOfFinder(-1);

module.exports =  {
  indexOf,
  lastIndexOf
}