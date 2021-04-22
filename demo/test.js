console.log(1111)
var str = "hello";
let a = 1
// fn 是闭包
function fn() {
  console.log(a);
}

function fn1() {
  let a = 2
  // 这里也是闭包
  return () => {
    console.log(a);
  }
}
console.log(123)
const fn2 = fn1()
fn2()