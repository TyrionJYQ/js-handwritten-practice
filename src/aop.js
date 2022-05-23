export default function Aop() {
  Function.prototype.before = function (beforeFn) {
    const self = this;
    if (typeof beforeFn !== "function") {
      throw new Error("function show be a function");
    }
    return function () {
      beforeFn.apply(this, arguments);
      return self.apply(this, arguments);
    };
  };

  Function.prototype.after = function (afterFn) {
    const self = this;
    if (typeof afterFn !== "function") {
      throw new Error("function show be a function");
    }
    return function () {
      const results = self.apply(this, arguments);
      afterFn.apply(this, arguments);
      return results;
    };
  };
}
