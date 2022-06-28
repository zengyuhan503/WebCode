/**
 * 什么是高阶函数
 * -- 高阶函数是对其他函数进行操作的函数，可以将它们作为参数返回它们。
 * -- 高阶函数就是一个函数，它接受函数未参数或者将函数作为输出返回
 */

/**
 * 1. 函数作为参数
 */
function bar(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

/**
 * 2.函数可以作为返回值
 */

function bar() {
    return function () { }
}

/**
 * JS中的高阶函数
 */

/**
 * .map
 * 1.返回一个新函数，数组中的元素未原始数组调用函数处理后的值
 * 2.不会改变原数组（引用类型除外）
 * 3.不会对空数组进行检测
 */
let arr = [10, 11, 12, 13, 14, 15, 13]
let newArr = arr.map(item => {
    return item * 2
})
console.log(arr) //[20,22,24,26,28,30,26]

/**
 * .filter
 * 1.创建一个新的数组，新数组的元素是通过检查指定数组中符合条件的所有元素
 * 2.不会对空数组进行检测
 * 3.不会改变原数组
 */

let arr1 = [10, 11, 12, 13, 14, 15, 13]
let newArr1 = arr1.map(item => {
    return item > 13
})
console.log(arr) //[14,15]

/**
 * .forEach
 * 1.类似于map(),传入的函数不需要返回值，将元素传递给回调函数
 * 2.不会对空数组进行执行
 * 3.不会返回新的数组，总是返回undefined
 */
let arr2 = [20, 40, 90, 100]
let newArr2 = arr.forEach((item, index) => {
    console.log(index, index)
})
// 20  0
// 40  1
// 90  2
// 100 3

/**
 * .sort
 * 1.对数组进行排序
 * 2.会改变原数组
 * 
 * ！！没有参数将会转为字符串按照ASCII进行排序
*/
let arr3 = [10, 20, 1, 14]
arr3.sort(function (x, y) {
    if (x < y) {
        return -1
    }
    if (x > y) {
        return 1
    }
    return 0
})
console.log(1, 10, 14, 20)

/**
 * .some
 * 1.会检测数组中的元素是否满足条件
 * 2.会执行数组的每个元素
 * 3.如果一个元素满足就返回true,后面的不在进行校验
 * 4.如果所有都不满足需求返回false
 * 5.不会改变元素组
 * 6.不会对空数组进行检测
 */
let arr4 = [10, 21, 2, 3]
let result = arr4.some(item => {
    return item > 12
})
console.log(result) //true

/**
 * .every
 * 1.将检测数组中每个元素是否都能符合指定条件
 * 2.方法会执行数组中每个元素，如果每个元素都满足条件，返回true
 * 3.如果有一个元素不能满足条件，则返回false
 * 4.不会改变原数组
 * 5.不会对空数组进行检测
 */

let arr5 = [10, 21, 2, 3]
let result1 = arr4.some(item => {
    return item > 12
})
console.log(result) // false


/**
 * .reduce
 * 1.接受一个函数作为累加器，数组中每个值（从左到右）开始缩减，最终计算未一个值
 * 2.不会对空数组进行检测
 */
 let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let sum=arr.reduce((prev,current)=>{
    return prev+current
 },0)