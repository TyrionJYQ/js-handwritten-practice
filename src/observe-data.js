export function observe(obj) {
  if (typeof obj !== "object" || obj === null) {
    return;
  }

  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}

function defineReactive(target, key, val) {
  observe(val);
  Object.defineProperty(target, key, {
    get() {
      return val;
    },

    Set(newval) {
      val = newval;
    },

    configurable: true,
    enumerable: true,
    writable: true,
  });
}
