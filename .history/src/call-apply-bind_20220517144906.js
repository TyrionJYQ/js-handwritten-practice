export default function registerCallApplyBind() {
  Function.prototype.$call = function () {
    const args = Array.from(arguments);
    let ctx = args.shift(0);
    ctx === null ? {} : ctx;
    ctx.fn = this;
    return ctx.fn(...args);
  };
}