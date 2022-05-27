export default function throttle(fn, interval = 1000) {
  let timer,
    excuted = false;
  return function () {
    const ctx = this;
    if (!excuted) {
      excuted = true;
      return fn.call(ctx, ...arguments); // if not called, called right now
    }
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.call(ctx, ...arguments);
    }, interval);
  };
}
