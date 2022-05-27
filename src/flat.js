export default function initFlat() {
  Array.prototype._flat = function (depth = 1) {
    let flatCount = 0;
    let temp = [];
    let arr = this;
    while (flatCount < depth) {
      temp = temp.concat(...arr);
      arr = temp;
      temp = [];
      flatCount++;
    }
    return arr;
  };
}
