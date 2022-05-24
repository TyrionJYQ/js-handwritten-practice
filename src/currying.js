var sum = (function () {
  var money = 0;
  return function () {
    for (let i = 0, len = arguments.length; i < len; i++) {
      money += arguments[i];
    }
    return money;
  };
})();

function currying(fn) {
  var args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.call(null, ...args);
    } else {
      args.push(...arguments);
      return function (arg) {
        fn(arg);
      };
    }
  };
}

const cost = currying(sum);

export default cost;
