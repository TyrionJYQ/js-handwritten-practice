export default function init$Map() {
  Array.prototype.$map = function (fn, thisArg) {
    if (typeof fn !== "function") {
      throw new Error("error");
    }
    thisArg = thisArg || global;
    const arr = this,
      results = [];
    for (let i = 0, l = arr.length; i < l; i++) {
      results.push(fn.call(thisArg, arr[i], i, arr));
    }
    return results;
  };
}
