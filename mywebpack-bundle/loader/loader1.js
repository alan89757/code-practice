const { mode } = require("../bundle.config");

module.exports = function(source) {
  console.log("loader1...");
  return source;
}