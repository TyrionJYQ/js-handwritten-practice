export function _create(target, properties) {
  function F() {}
  const instance = new F();

  if (typeof target !== "object" && typeof target !== "function") {
    throw new Error(
      `_create function first params  of  target should Object but got ${typeof target}:${target}`
    );
  }
  instance.prototype = target;

  if (typeof target !== "object") {
    throw new Error(
      `_create function second params  of  properties should Object but got ${typeof target}:${target}`
    );
  }

  if (target === null) {
    throw new Error(
      `_create function second params  of  properties unsupport null but got ${typeof target}:${target}`
    );
  }
  Object.defineProperties(instance, properties);

  return instance;
}
