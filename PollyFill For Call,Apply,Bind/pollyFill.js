//PollyFill For Call
if (!Function.prototype.call) {
  Function.prototype.call = function (obj, ...args) {
    if (typeof this !== "function") {
      throw new Error("not Callable");
    }
    obj.Fn = this;
    obj.Fn(...args);
  };
}
//PollyFill for Apply
if (!Function.prototype.apply) {
  Function.prototype.apply = function (obj, ...args) {
    if (typeof this !== "function") {
      throw new Error("not Callable");
    }
    if (!Array.isArray(...args)) {
      throw new Error(
        "TypeError: CreateListFromArrayLike called on non-object"
      );
    }
    obj.Fn = this;
    obj.Fn(...args);
  };
}
//PollyFill For Bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (obj, ...args) {
    if (typeof this !== "function") {
      throw new Error("not Callable");
    }
    obj.Fn = this;
    return function () {
      obj.Fn(...args);
    };
  };
}
