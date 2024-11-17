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
let val = 5 + "5";
console.log(typeof val);
