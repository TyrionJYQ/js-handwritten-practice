import { inherit } from "../src/extends";

function Parent() {}
Parent.prototype.kind = "human";

function Child(age) {
  this.age = age;
}

inherit(Child, Parent);

describe("test 01", () => {
  expect();
});
