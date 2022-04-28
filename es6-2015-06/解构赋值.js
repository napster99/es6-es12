/**
 * ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，称为解构(Destructuring)
 */

// 匹配模式
// let [a, b, c, d] = [1, 2, 3, 4];
// let [a, ...z] = [1, 2, 3, 4];

// let [x, y, ...z] = [1];
// // x: 1
// // y: undefined  解构不成功，变量的值就等于undefined
// // z: []

// // 不完全解构 左右括号对应解析
// let [a, [b, ...z], c] = [1, [2, 3], 4];

// // 以下报错 原因分析：数组解构的前提就是被解构的值是数组（严格的说 不是可遍历的结构(Iterator) 将会报错）
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {}; // 不具备Iterator接口

// Set结构 解构
// let [x, y, z] = new Set([1, 2, 3]);

// fibs是一个Generator 函数， 原生实现了Iterator接口，所以可被赋值
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

