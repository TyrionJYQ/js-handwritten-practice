export default function timeThunk(fn, list, count = 10, interval = 1000) {
  let timer = null;
  function start() {
    for (let i = 0; i < Math.min(list.length, count); i++) {
      fn(list.shift());
    }
  }

  return function () {
    timer = setInterval(() => {
      if (list.length === 0) {
        clearInterval(timer);
        timer = null;
        return;
      }
      start();
    }, interval);
  };
}
