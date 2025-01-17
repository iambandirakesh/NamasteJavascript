let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 Rejected");
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 Rejected");
  }, 3000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 Rejected");
  }, 100);
});
Promise.race([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err.errors);
    console.log(err);
  });
