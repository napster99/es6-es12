/**
 * @description 三、Object.getOwnPropertyDescriptors()
 */


let obj = {
  id: 1,
  name: 'test',
  get gender() {
    console.log('gender')
  },
  set grade(g) {
    console.log(g)
  }
}
Object.getOwnPropertyDescriptors(obj)

//输出结果为：
// {
//   gender: {
//     configurable: true,
//     enumerable: true,
//     get: f gender(),
//     set: undefined
//   },
//   grade: {
//     configurable: true,
//     enumerable: true,
//     get: undefined,
//     set: f grade(g)
//   },
//   id: {
//     configurable: true,
//     enumerable: true,
//     value: 1,
//     writable: true
//   },
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: 'test',
//     writable: true
//   }
// }
 

// 如果只输出 id
Object.getOwnPropertyDescriptors(obj, 'id')


// 返回结果中包含的键可能的值有：configurable、enumerable、value、writable、get、set。
// Object.assign 解决了不了 get funcName set funcName 的拷贝问题

let obj = {
  id: 1,
  name: 'test',
  get gender() {
    console.log('gender')
  }
}
Object.assign(obj)

//输出结果为：
// {
//   gender: undefined
//   id: 1,
//   name: 'test'
// }


// 此时，Object.getOwnPropertyDescriptors方法配合Object.defineProperties方法，就可以实现正确拷贝。

let obj = {
  id: 1,
  name: 'test',
  get gender() {
    console.log('gender')
  }
}
let obj1 = {}
Object.defineProperties(obj1, Object.getOwnPropertyDescriptors(obj))
Object.getOwnPropertyDescriptors(obj1)

//输出结果为：
// {
//   gender: {
//     configurable: true,
//     enumerable: true,
//     get: f gender(),
//     set: undefined
//   },
//   id: {
//     configurable: true,
//     enumerable: true,
//     value: 1,
//     writable: true
//   },
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: 'test',
//     writable: true
//   }
 