export function create(target, properties) {
  function F() {}
  F.prototype = target;
  const instance = new F();
  if (typeof target !== "object" && typeof target !== "function") {
    throw new Error(
      `create function first params  of  target should Object but got ${typeof target}:${target}`
    );
  }

  if (typeof properties !== "object") {
    throw new Error(
      `create function second params  of  properties should Object but got ${typeof target}:${target}`
    );
  }

  if (target === null) {
    throw new Error(
      `create function second params  of  properties unsupport null but got ${typeof target}:${target}`
    );
  }
  Object.defineProperties(instance, properties);

  return instance;
}
