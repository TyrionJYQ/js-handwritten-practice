export default function _new() {
  const args = [...arguments],
    Ctor = args.shift();

  if (typeof Ctor !== "function") {
    throw new Error("error");
  }
  const ctx = {};
  ctx.__proto__ = Ctor.prototype;
  Ctor.apply(ctx, ctx);

  return ctx;
}
