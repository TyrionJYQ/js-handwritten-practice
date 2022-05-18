export function instance_Of(L, H) {
  if (typeof L !== "object") {
    return false;
  }
  while (true) {
    L = L.__proto__;
    if (!L) return false;
    if (L === H.prototype) return true;
  }
}
