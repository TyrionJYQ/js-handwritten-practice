export function _create(target, properties) {
  function F() {}
  const instance = new F();

  if (typeof target !== "object" || typeof target !== "function") {
    throw new Error(
      `_create function first params  of  target should Object but got ${typeof target}:${target}`
    );
  }
  instance.prototype = target;

  if (typeof target !== "object") {
    throw new Error(
      `_create function first params  of  target should Object but got ${typeof target}:${target}`
    );
  }

  return instance;
}
