let granddParent = document.querySelector(".gp");
let parent = document.querySelector(".p");
let child = document.querySelector(".c");
let list = ["granddParent", "parent", "child"];
//---- called Event Bubbling----
[granddParent, parent, child].forEach((ele, idx) => {
  ele.addEventListener(
    "click",
    () => {
      alert(list[idx] + " " + "Clicked");
    },
    { once: true }
  );
});
document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("body " + "Clicked");
});

document.addEventListener("click", () => {
  alert("Document " + "Clicked");
});
