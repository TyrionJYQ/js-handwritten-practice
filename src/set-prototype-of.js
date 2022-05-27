export default function setPrototypeOf(obj, prototype) {
  if (typeof prototype !== "object" && prototype === null) {
    throw new Error("shim setPrototypeOf should a object");
  }

  if ({}.__proto__) {
    obj.__proto__ = prototype;
    return obj;
  } else {
    function F() {}
    F.prototype = prototype;
    const temp = new F();
    Object.keys(obj).forEach((key) => {
      temp[key] = obj[key];
    });
    return temp;
  }
}
