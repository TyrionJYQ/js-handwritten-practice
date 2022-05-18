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
    const firstArgs = [...arguments].slice(1);
    // Todo 判断是否直接通过new 调用
  };
}
