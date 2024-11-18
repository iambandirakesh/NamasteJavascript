// console.log(val); // Undefined
// var val = 100;
// console.log(val1);  ReferenceError: Cannot access 'val1' before initialization
// let val1 = 200;
// console.log(val2); ReferenceError: Cannot access 'val2' before initialization
// const val2 = 300;
// let newF = test();
// newF();
// function test() {
//   console.log(val2);
//   let val3 = 400;
//   var val4 = 500;
//   function test2() {
//     console.log(val3);
//     console.log(val4);
//   }
//   return test2;
// }
// console.log(val4);
// let newVar = true;
// if (newVar) {
//   var val5 = 600;
//   console.log(val5);
// }
// console.log(val5);
// const obj = {
//   a: 1,
//   b: 2,
//   c: function () {
//     console.log(this.a + this.b);
//   },
// };

// const newObj = obj.c;
// console.log(newObj);
// newObj();
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const { a, b, ...rest } = obj;

// console.log(rest);
// let x = [1, 2, 3];
// let y = [2];
// let z = x + y;

// console.log(z);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// let arr = "123456789";
// let arr1 = [1, 2, 3, 4];
// arr1[10] = 10;
// console.log(Array.isArray(arr1));
// console.log("1", this);
// function test() {
//   console.log("2", this);
//   function test2() {
//     console.log("3", this);
//   }
//   test2();
// }
// test();
// let val = 5 + "5";
// console.log(typeof val);
// //CallBack Hell
// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log("Hello World4");
//       }, 1000);
//       console.log("Hello World3");
//     }, 1000);
//     console.log("Hello World2");
//   }, 1000);
//   console.log("Hello World1");
// }, 1000);
let arr = [1, 2, [3, 4, [5, 6, 7, [8, [9, 10]]]]];
let newArr = [];
function flattenArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      flattenArr(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
}
flattenArr(arr);
console.log(newArr);
//Debounce
// const handlekeyUp = () => {
//   console.log("Fetching Data...");
// };
// const debounce = (func, delay) => {
//   let timer;
//   return function (args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(args);
//     }, delay);
//   };
// };
// let betterFunction = debounce(handlekeyUp, 4000);
// //Throttling
// const handleClick = () => {
//   console.log("Clicked");
// };
// const throttling = (func, delay) => {
//   let flag = true;
//   return function (args) {
//     let context = this;
//     if (flag) {
//       flag = false;
//       setTimeout(() => {
//         func(context, args);
//         flag = true;
//       }, delay);
//     }
//   };
// };
function sum(a) {
  // Inner function to hold the current sum
  let currentSum = a;
  function inner(b) {
    if (b) {
      currentSum += b;
      return inner;
    }
    return currentSum;
  }
  return inner;
}

// Example Usage
console.log(sum(1)(2)(3)(4)()); // Outputs: 10
console.log(sum(5)(10)()); // Outputs: 15
console.log(sum(100)()); // Outputs: 100
