export default function init() {
  Array.prototype._reduce = function (fn, initalValue) {
    var arr = this;
    if (Object.prototype.toString.call(arr).slice(8, -1) !== "Array") {
      throw new Error("error");
    }
    if (typeof fn !== "function") {
      throw new Error(`param ${fn} should a function`);
    }
    let index = 0,
      result;
    while (!(index in arr)) {
      index++;
    }
    if (initalValue) {
      result = initalValue;
    } else {
      result = arr[index];
      ++index;
    }
    while (index < arr.length) {
      result = fn(result, arr[index], index, arr);
      index++;
    }
    return result;
  };
}
