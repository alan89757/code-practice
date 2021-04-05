module.exports = function(source) {
  console.log("loader3...");
  return source.replace("apple", "loader3");
}