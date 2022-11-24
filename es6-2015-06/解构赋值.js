/**
 * ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，称为解构(Destructuring)
 */

// 匹配模式
// let [a, b, c, d] = [1, 2, 3, 4];
// let [a, ...z] = [1, 2, 3, 4];

/**
 * 数组的解构赋值 []
 */
let [x, y, ...z] = [1];
// x: 1
// y: undefined  解构不成功，变量的值就等于undefined
// z: []

// 不完全解构 左右括号对应解析
let [a, [b, ...z], c] = [1, [2, 3], 4];

// 以下报错 原因分析：数组解构的前提就是被解构的值是数组（严格的说 不是可遍历的结构(Iterator) 将会报错）
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {}; // 不具备Iterator接口

// Set结构 解构
let [x, y, z] = new Set([1, 2, 3]);

// fibs是一个Generator 函数， 原生实现了Iterator接口，所以可被赋值 napster
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
// first, second, third, fourth, fifth, sixth // 0 1 1 2 3 5

// 默认赋值

let [x = 1] = [undefined]; //x:1
let [x = 1] = [null]; //x: null  ES6内部使用严格相等运算符(===)，当成员严格等于undifined 才会生效

// 当默认值是表达式的情况
function foo() {
  console.log("...");
}

let [x = f()] = [1];
console.log(x); // 1 表达式是惰性求值， 1为true时， f函数不会被运行

// // 默认值可以引用解构里的其他变量
let [x = 1, y = x] = []; // x=1, y=1
let [x = y, y = 1] = []; // ReferenceError: Cannot access 'y' before initialization

/**
 * 对象的解构赋值 {}
 */

let { foo, bar } = { foo: "aaa", bar: "bbb" }; // 最基本写法
let { foo: foo, bar: foo } = { foo: "aaa", bar: "bbb" }; // 实际写法
let { foo: baz } = { foo: "aaa", bar: "bbb" };
// foo => error: foo is not defined  这时的foo是模式 不是变量 不会被赋值
// baz => "aaa" 所以第二个才是变量赋值

// 与数组一样 对象解构也可以匹配模板
let obj = {
  p: [
    "Hello",
    {
      y: "World",
    },
  ],
};

let {
  p: [x, { y }],
} = obj;
// x: Hello
// y: World
// 这时的p是模式不是变量，如果要把p当成变量，可以这么写
let {
  p,
  p: [x, { y }],
} = obj;
// p : [ "Hello",{ y: "World" }],

// 已经声明的变量用于解构赋值 必须小心
let x;
// ({x}) = {x :1} // 不加() 报错 {x}格式会理解成一个代码块，非表达式
// {
// }

// ({}) // 不能将{}写在行首 就可

// 合法
// ({} = [true, false]);
// ({} = 'abc');
// ({} = []);

// 数组是本质是特殊的对象，可以进行对数组的解构
let arr = [1, 2, 3];
let { 0: first, [2]: last } = arr; // 属性名表达式 多重嵌套也没事  napster
// first 1
// last 3

/**
 * 字符串的解构赋值
 */
// 字符串被转成一个类似数组的对象
const [a, b, c, d, e] = "hello"; // h e l l o
const { length: len } = "hello"; // len 5 类似数组的对象都一个length属性

// 如果值为数值和布尔值， 则会先转为对象
let { toString: s } = 123;
// s === Number.prototype.toString -> true

// 由于undefined和null无法转为对象 无法进行解构赋值
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError

/**
 * 函数参数的解构赋值
 */
function add([x, y]) {
  return x + y;
}
add([1, 2]); // 3

// 参数维度的默认值
function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 这种是为整个参数指定默认值，而不是各个参数的默认值
function move({ x, y } = { x: 0, y: 0 }) {
  return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

// 圆括号使用情况 napster

