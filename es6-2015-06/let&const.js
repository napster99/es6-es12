/**
 * let & const
 * var 会存在变量提升 let const 不会
 * var 变量提升只针对function作用域的提升
 */

// TDZ（temporal dead zone）
// 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，
// 只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

var tmp = 123

if (true) {
  tmp = 'abc' // ReferenceError: Cannot access 'tmp' before initialization
  let tmp // 只要块级作用域存在 let命令，tmp就绑定这个区域，不再受外部影响
}

if(true) {
  console.log(typeof x) // 有了TDZ 意味着typeof 不再是一个百分百安全的操作
  let x = 2 
}

function bar(x = y, y = 2) { // 比较隐蔽 ReferenceError: Cannot access 'y' before initialization
  return [x, y]
}

bar() // 报错


// 报错
let x = x

function f1() {
  let n = 5
  if (true) {
    let n = 10
  }
  console.log(n) // 5  var 申明 10
}

f1()

// es6 块级作用域 可任意前套
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};


// IIFE 写法 用function作用域防止全局污染
(function () {
  var tmp = '...';
}());

// 块级作用域写法 块级作用域同样防止全局污染
{
  let tmp = '...';
}

// 浏览器的 ES6 环境
// function f() { console.log('I am outside!'); }

(function () {
  // var f = undefined  ES6环境 实际运行还是会把f先定义成undefined
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f(); // TypeError: f is not a function 报错？？？？？？ 
}());



// ES6 块级作用域必须有大括号
if (true) let x = 1; // 第一种写法，报错

if (true) { 
  let x = 1; // 第二种写法，不报错 
}


/**
 * const 实际上保证的 并不是变量的值不得改动，而是变量指向的内存地址不得改动(引用类型)
 * 基本数据类型(值类型) string/number/boolean/symbol/null/undefined/bigint/object(有争议)
 */
const foo = {}
foo.prop = 123 // 正常运行

foo = {} // 改变地址 报错

// 注： 如果真想将一个对象冻结，可使用Object.freeze方法, 但对象上的属性无法锁定
const foo = Object.freeze({});

foo.prop = 123 // 严格模式 报错  常规模式 可运行 但不起作用； 浏览器控制台 是常规模式

// 该方法可以彻底冻结
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
