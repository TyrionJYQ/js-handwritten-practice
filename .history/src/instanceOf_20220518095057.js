export function instanceOf(target, Ctor) {
  // check params
  if ({}.__proto__) {
    if (target.__proto__ === Ctor.prototype) {
      return true;
    }
  } else if (target.constructor === Ctor) {
    return true;
  } else {
    return false;
  }
}
