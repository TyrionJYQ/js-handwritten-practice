export default function _new() {
  let args = [...arguments],
    Ctor = args.shift();

  if (typeof Ctor !== "function") {
    throw new Error("error");
  }
  const ctx = {};
  Ctor.apply(ctx, ctx);
  return ctx;
}
