// 判断a,b是否相等
function eq(a, b, aStack, bStack) {
  if(a === b) return a !== 0 || 1/a === 1/b;  // 判断a，b为+0,-0,0情况，函数在这里能判断出来了
  if(a == null || b == null) return false;  // null是object，提早退出提高效率
  if( a !== a) return b !== b;  // 判断NaN
  var typea = typeof a;
  if(typea != "function" && typea != "object" && typeof b !== "object") return false;   // a是基本数据类型,前面一继判断基础类型
  // 处理更复杂的对象
  return deepEq(a, b , aStack, bStack);
}

function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
}

// 对象，深层次比较
function deepEq(a, b, aStack, bStack) {
  var classNamea = toString.call(a);  // 判断是否数组
  if(classNamea !== toString.call(b)) return false;   // 类型不一样，直接返回false
  switch (classNamea) {
    case "[object RegExp]":  // 正则
    case "[object String]":  // 字符串
      return "" + a === "" + b;
    case "[object Number]":
      if(a !== a) return b !== b; // NaN
      return +a === 0 ? 1/ +a === 1/ b : +a === +b;  // +0, -0, 0
    case "[object Date]": 
    case "[object Boolean]": 
      return +a === +b; // 隐式转换number比较
  }
  var areArrays = classNamea  === "[object Array]"; // 是否是一个整数
  if(!areArrays) {  // 不是一个数组
    if(typeof a !== "object" || typeof b !== "object") return false;  // 排除两个函数 var fn1 = function(){}; var fn2 = function(){}
    var aCtor = a.constructor;
    var bCtor = b.constructor;

    if(aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
      return false;
    }

    aStack = aStack || [];  // 存储b引用
    bStack = bStack || [];  // 存储b引用
    var length = aStack.length;
    // 检查是否有循环引用
    while (length--) {
      if(aStack[length] === a) return bStack[length] === b;
    }
    if(areArrays) { // 数组
      length = a.length;
      if(length !== b.length) return false;
      while (length--) {
        if(!eq(a[length], b[length], aStack, bStack)) return false;  // 递归判断
      }
    } else {  // 对象
      var keys = Object.keys(a), key;
      var length = keys.length;
      if(Object.keys(b).length !== length) return false;
      while (length--) {
        key = keys[length];  // 当前的key
        if(!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    aStack.pop();  // 这为什么要pop
    bStack.pop();
    return false;
  }
  

}