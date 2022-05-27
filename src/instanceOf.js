// export function instance_Of(L, H) {
//   if (typeof L !== "object") {
//     return false;
//   }
//   while (true) {
//     L = L.__proto__;
//     if (!L) return false;
//     if (L === H.prototype) return true;
//   }
// }

export function instance_Of(L, R) {
  //程序是活的，人也是活的
  if (typeof L !== "object" || L === null) {
    return false;
  }

  while (L) {
    if (L.__proto__ === R.prototype) {
      return true;
    }

    L = L.__proto__;
  }

  return false;
}
