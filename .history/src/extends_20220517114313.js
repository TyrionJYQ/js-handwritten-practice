export default function inherit(Parent, Child) {
  // inherit Parent.prototype
  Child.prototype = Object.create(Parent.prototype);
  // fix constructor
  Child.constructor = Child;
}
