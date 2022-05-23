/**
 *
 * 没有考虑到target是数组的问题
 *
 */
// export default function deepCopy(target) {
//   if (!isObject(target)) {
//     return target;
//   }
//   const temp = {};
//   for (let i in target) {
//     if (!isObject(target[i])) {
//       temp[i] = target[i];
//     } else {
//       temp[i] = deepCopy(target[i]);
//     }
//   }
// }

export function isObject(val) {
  return typeof val === "object" && val !== null;
}

// export default function deepCopy(target) {
//   if (!isObject(target)) {
//     return target;
//   }
//   const temp = Array.isArray(target) ? [] : {};
//   for (let i in target) {
//     if (!isObject(target[i])) {
//       temp[i] = target[i];
//     } else {
//       temp[i] = deepCopy(target[i]);
//     }
//   }
//   return temp;
// }

/**
 * 怎么解决循环引用问题
 */

export default function deepCopy(target, map = new Map()) {
  if (!isObject(target)) {
    return target;
  }
  const temp = Array.isArray(target) ? [] : {};
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, temp);
  for (let key in target) {
    temp[key] = deepCopy(target[key], map);
  }
  return temp;
}
