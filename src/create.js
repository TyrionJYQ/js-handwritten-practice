export function create(target, properties = {}) {
  function F() {}
  F.prototype = target;
  const instance = new F();
  if (typeof target !== "object" && typeof target !== "function") {
    throw new Error(`create function first params  of  target should Object`);
  }

  if (typeof properties !== "object") {
    throw new Error(
      `create function second params  of  properties should Object`
    );
  }

  if (target === null) {
    throw new Error(
      `create function second params  of  properties unsupport null`
    );
  }
  Object.defineProperties(instance, properties);

  return instance;
}
