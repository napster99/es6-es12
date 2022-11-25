/**
 * @description  es8
 */


/* 一、 Object.entries && Object.values */ 

//  Object.entries() 

Object.entries({ one: 1, two: 2 })    //[['one', 1], ['two', 2]]
Object.entries([1, 2])                //[['0', 1], ['1', 2]]


// 注意：键值对中，如果键的值是Symbol，编译时将会被忽略。例如：
Object.entries({ [Symbol()]: 1, two: 2 })       //[['two', 2]]

// Object.entries()返回的数组的顺序与for-in循环保持一致，
// 即如果对象的key值是数字，则返回值会对key值进行排序，返回的是排序后的结果。
// 例如：

Object.entries({ 3: 'a', 4: 'b', 1: 'c' })    //[['1', 'c'], ['3', 'a'], ['4', 'b']]



// Object.values()

Object.values({ one: 1, two: 2 })            //[1, 2]
Object.values({ 3: 'a', 4: 'b', 1: 'c' })    //['c', 'a', 'b']


/* 二、 padStart && padEnd */ 

'Vue'.padStart(10)           //'       Vue'
'React'.padStart(10)         //'     React'
'JavaScript'.padStart(10)    //'JavaScript'

'Vue'.padStart(10, '_*')           //'_*_*_*_Vue'
'React'.padStart(10, 'Hello')      //'HelloReact'
'JavaScript'.padStart(10, 'Hi')    //'JavaScript'
'JavaScript'.padStart(8, 'Hi')     //'JavaScript'
 



