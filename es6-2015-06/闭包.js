/**
 * 闭包杂谈
 * 词法环境【Lexical Environment】：1、环境记录 2、外部词法环境
 */

function foo() {
  let count = 0;
  return () => {
    return count++;
  };
}

let counter = foo();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // 创建一个 shooter 函数，
      alert(i); // 应该显示其编号
    };
    shooters.push(shooter); // 将此 shooter 函数添加到数组中
    i++;
  }
  // ……返回 shooters 数组
  return shooters;
}
let army = makeArmy();

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[2](); // 10，其他的也是这样。

// 改进一
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // shooter 函数
      alert(j); // 应该显示它自己的编号
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

// 现在代码正确运行了
army[0](); // 0
army[5](); // 5

// 改进二
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // shooter 函数
      alert(i); // 应该显示它自己的编号
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
