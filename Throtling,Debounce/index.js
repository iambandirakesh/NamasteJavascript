//--------------Debounce--------
//def: the time diffrenece between each key stroke is greater than the time frame that we set than only it invoc the function.
let inputBoxRef = document.querySelector("input");
const handlekeyup = (e) => {
  console.log("Fetching Data..." + e.target.value);
};
const debounce = (func, delay) => {
  let timer;
  return function (args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay);
  };
};
let betterFunction = debounce(handlekeyup, 300);
inputBoxRef.addEventListener("keyup", betterFunction);
//------Throttling---------
// def: the time difference between the two click events is greater than the time framw that we set only invoc the function.
let buttonRef = document.querySelector("button");
let counter = 1;
const handleclick = () => {
  console.log("Click happend" + " " + counter++);
};
const throttling = (func, delay) => {
  let flag = true;
  return function (args) {
    let context = this;
    if (flag) {
      flag = false;
      setTimeout(() => {
        func.apply(context, args);
        flag = true;
      }, delay);
    }
  };
};
let betterClickFunction = throttling(handleclick, 300);
buttonRef.addEventListener("click", betterClickFunction);
