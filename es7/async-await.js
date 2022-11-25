/**
 * @description async/await 
 */

 async function asyncFunc(params) {
  const result1 = await this.login()
  const result2 = await this.getInfo()
}


// 异步函数存在以下四种使用形式：
    
// 函数声明： async function foo() {}
// 函数表达式： const foo = async function() {}
// 对象的方式： let obj = { async foo() {} }
// 箭头函数： const foo = async () => {}