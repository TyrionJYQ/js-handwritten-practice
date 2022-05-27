export default function PubSub() {
  const subscribers = {};

  // 订阅
  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }

    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;
    // 取消订阅
    function unSubscribe() {
      subscribers[eventName].splice(index, 1);
    }
    return {
      unSubscribe,
    };
  }

  // 发布
  function publish(eventName, ...args) {
    const fns = subscribers[eventName];
    if (!Array.isArray(fns)) {
      return;
    }

    fns.forEach((fn) => {
      fn(...args);
    });
  }

  return {
    subscribe,
    publish,
    // unSubscribe,
  };
}
