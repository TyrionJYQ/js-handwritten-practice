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
    const rest = args[0] ? args[0] : [];
    return ctx.fn(...rest);
  };

  Function.prototype.$bind = function (ctx) {
    ctx = ctx === null ? {} : ctx;
    const Fn = this;
    const firstArgs = [...arguments].slice(1);
    return function F() {
      if (this instanceof F) {
        return new Fn(...firstArgs, ...arguments);
      } else {
        return Fn.apply(ctx, [...firstArgs, ...arguments]);
      }
    };
  };
}
