const path = require("path");
const BundlePlugin = require("./plugins/bundle-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
     {
       test:/\.js$/,
       use: [
        "./loader/loader1.js",
        "./loader/loader2.js",
        "./loader/loader3.js"
       ]
     }
    ]
  },
  plugins: [
    new BundlePlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
}