
const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

if(window.Worker) {
  const myWorker = new Worker("worker2.js");

  first.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log("first发送信息到worker...");
  }
  second.onchange = function() {
    myWorker.postMessage([first.value, second.valule]);
    console.log("second发送信息到worker...");
  }
  // 接受web worker返回的值
  myWorker.onmessage = function(e) {
    console.log("接收到计算结果：", e.data);
    result.textContent = e.data;
  }
} else {
  console.log("当前环境不支持Worker...")
}