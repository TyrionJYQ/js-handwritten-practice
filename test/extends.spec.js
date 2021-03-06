import inherit from "../src/extends";

function Parent() {}
Parent.prototype.kind = "human";
Parent.country = "China";
function Child(age) {
  this.age = age;
}
inherit(Child, Parent);
const tom = new Child(18);

test("instance tom has a attribute of kind", () => {
  expect(tom.kind).toBe("human");
});

test("instance tom does not has own property of kind", () => {
  expect(tom.hasOwnProperty("kind")).toBe(false);
});

test("Constructor Child has inherit static attribute country", () => {
  expect(Child.country).toBe("China");
});

test("Constructor Child has a super of Parent", () => {
  expect(Child.super).toBe(Parent);
});
