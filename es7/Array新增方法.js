/**
 * @description es7 数组新特性
 */

// 1、Array.prototype.includes() 方法

['a', 'b', 'c'].includes('a')  // true
['a', 'b', 'c'].includes('d')  // false

['a', 'b', 'c', 'd'].includes('b')     // true 默认从0索引值开始
['a', 'b', 'c', 'd'].includes('b', 1)  // true  从1开始
['a', 'b', 'c', 'd'].includes('b', 2)  // false 从2开始

['a', 'b', 'c'].includes('a')  === ['a', 'b', 'c'].indexOf('a') > -1   // true

//indexOf & includes 区别点
NaN === NaN  // false
[1, NaN, 2, 3].indexOf(NaN)   // -1
[1, NaN, 2, 3].includes(NaN)  // true

