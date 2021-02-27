const express = require("express");
const cors = require("cors");
const app = express()
const corsConfig = {
  origin: "http://localhost:9000",
  credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.get('/cors', function (req, res, next) {
  res.json({msg: 'This is msg'})
})
app.listen(3000, () => {
  console.log("服务开启成功"); //yellow
})