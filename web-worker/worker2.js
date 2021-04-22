onmessage = function(e) {
  console.log(e)
  console.log(`web worker收到信息${e.data}`)
  const result = e.data[0] + e.data[1];
  if(isNaN(result)) {
    postMessage("需要输入两个数字");
  } else {
    const workerResult = "计算结果：" + result;
    postMessage(workerResult);
  }
}