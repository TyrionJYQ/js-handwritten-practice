export default function registerCallApplyBind() {
  Function.prototype.$call = function () {
    const args = Array.from(arguments);
    let ctx = args.shift(0);
    ctx = ctx === null ? {} : ctx;
    ctx.fn = this;
    return ctx.fn(...args);
  };

  Function.prototype.$apply = function () {
    const args = Array.from(arguments);
    let ctx = args.shift(0);
    ctx = ctx === null ? {} : ctx;
    ctx.fn = this;
    return ctx.fn(...args[0]);
  };

  Function.prototype.$bind = function (ctx) {
    const fn = this;
    return function (args) {
      return fn.call(ctx, ...args.slice(1));
    };
  };
}
