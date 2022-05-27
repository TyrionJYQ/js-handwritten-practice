export default function setPrototypeOf(target, prototype) {
  if (typeof prototype !== "object" || typeof prototype === null) {
    throw new Error("error");
  }

  if ({}.__proto__) {
    target.__proto__ = prototype;
  }
}
