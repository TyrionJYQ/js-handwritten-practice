import inherit from "../src/extends";

function Parent() {}
Parent.prototype.kind = "human";

function Child(age) {
  this.age = age;
}
inherit(Child, Parent);
const tom = new Child(18);

test("instance tom has a attribute of kind", () => {
  expect(tom.kind).toBe("human");
});

test("instance tom does not has own property of kind", () => {
  Object.prototype.hasOwnProperty;
  expect(tom.hasOwnProperty("kind")).toBe(true);
});