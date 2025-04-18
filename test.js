// let cartData = [
//   { Item: "Shirt", price: 299, available: true },
//   { Item: "Pant", price: 599, available: true },
// ];
// let balance = 0;
// function validateCart(cartData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (cartData.length > 0) {
//         resolve({ status: true, message: "Cart is Valid", cartData: cartData });
//       } else {
//         reject({ status: false, message: "Cart is Empty" });
//       }
//     }, 2000);
//   });
// }
// function checkAvailability(cartData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let flag = cartData.every((data) => data.available);
//       if (flag) {
//         resolve({
//           status: true,
//           message: "Products Available",
//           cartData: cartData,
//         });
//       } else {
//         reject({ status: false, message: "Products Not Available" });
//       }
//     }, 2000);
//   });
// }
// function payment(cartData, balance) {
//   return new Promise((resolve, reject) => {
//     let cost = cartData.reduce((total, curr) => {
//       return total + curr.price;
//     }, 0);
//     setTimeout(() => {
//       if (cost <= balance) {
//         let orderId = new Date().getTime();
//         resolve({ status: true, message: "Payment Success", orderId: orderId });
//       } else {
//         reject({ status: false, message: "Payment Failed! Try Again" });
//       }
//     }, 200);
//   });
// }
// function orderStatus(orderStatus) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (orderStatus.status) {
//         resolve({ status: true, message: "Order Confirmed" });
//       } else {
//         reject({ status: false, message: "Order Failed" });
//       }
//     }, 2000);
//   });
// }
// validateCart(cartData)
//   .then((data) => {
//     console.log(data.message);
//     return checkAvailability(data.cartData);
//   })
//   .then((data) => {
//     console.log(data.message);
//     return payment(data.cartData, balance);
//   })
//   .then((data) => {
//     console.log(data.message);
//     return orderStatus(data);
//   })
//   .then((data) => console.log(data.message))
//   .catch((err) => console.log(err.message));
// const path = require("path");
// console.log("filePath:", __filename);
// console.log("DirPath:", __dirname);
// console.log("sep", path.sep);
// console.log("delimiter", path.delimiter);
// console.log("path", process.env.PATH);
// console.log("extension", path.extname(__filename));
// console.log(
//   "relative Path",
//   path.relative(__filename, "/media/rakesh/BANDI_s SD/Ubantu/Learn/index.html")
// );
// const path = require("path");
// console.log(path.join(__dirname, "test.html"));

function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
  // fakeAjax(file, function (text) {
  // what do we do here?
  //   console.log(text);
  // });
  return new Promise((res, rej) => {
    fakeAjax(file, res);
  });
}
// request all files at once in "parallel"
Promise.all([getFile("file1"), getFile("file2"), getFile("file3")]).then(
  (data) => console.log(data)
);

// The task is to get the data in the right order,
// file1 first, then file2, and finally file3
