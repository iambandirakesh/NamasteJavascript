let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 rejected");
  }, 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Solved");
  }, 3000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Solved");
  }, 2000);
});
Promise.race([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
