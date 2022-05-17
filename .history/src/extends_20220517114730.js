export default function inherit(Parent, Child) {
  // inherit Parent.prototype
  Child.prototype = Object.create(Parent.prototype);
  // fix constructor
  Child.constructor = Child;
  // set super
  Child.super = Parent;
  // inherit static attributes of Parent
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(Child, Parent);
  } else if ({}.__proto__) {
    Child.__proto__ = Parent;
  } else {
    for (let i in Parent) {
      if (Parent.hasOwnProperty(i) && !(i in Child)) {
        Child[i] = Parent[i];
      }
    }
  }
}
