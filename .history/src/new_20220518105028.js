export default function _new() {
  const args = [...arguments],
    Ctor = args.shift();

  if (typeof Ctor !== "function") {
    throw new Error("error");
  }
  const ctx = {};
  ctx.__proto__ = Ctor.prototype;
  const res = Ctor.apply(ctx, ctx);
  if (res !== null && typeof res === "object") {
    return res;
  } else {
    return ctx;
  }
}
