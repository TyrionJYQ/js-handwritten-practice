import inherit from "../src/extends";

function Parent() {}
Parent.prototype.kind = "human";

function Child(age) {
  this.age = age;
}
inherit(Child, Parent);
const tom = new Child(18);
// describe("test 01", () => {
//   expect(tom.kind).toBe("human");
// });

// describe("test 02", () => {
//   expect(tom.age).toBe(18);
// });

test("adds 1 + 2 to equal 3", () => {
  expect(tom.kind).toBe("human");
});
