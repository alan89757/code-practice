const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dancer.js",
    library: "dancer",  // 导出全局变量， require时提示名称
    libraryTarget: "umd"  // 通用引用
  }
}