export default function ObjectSymbolIterator(obj) {
  Object.defineProperty(obj, Symbol.iterator, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function () {
      const self = this;
      const keys = Object.keys(self),
        len = keys.length;
      let i = 0;
      return {
        next: function () {
          return {
            done: i >= len,
            value: self[keys[i++]],
          };
        },
      };
    },
  });
}
