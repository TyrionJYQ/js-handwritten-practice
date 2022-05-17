import { inherit } from "../src/extends";

function Parent() {}
Parent.prototype.kind = "human";

function Child(age) {
  this.age = age;
}

inherit(Child, Parent);
const tom = new Child(18);

describe("test 01", () => {
  expect(tom.kind).toBe("human");
});

describe("test 02", () => {
  expect(tom.age).toBe(18);
});
