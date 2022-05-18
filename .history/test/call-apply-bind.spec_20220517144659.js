import registerCallApplyBind from "../src/call-apply-bind";

registerCallApplyBind();

test("call simple Object without other params", () => {
  function foo() {
    return this.foo;
  }
  expect(foo.$call({ foo: "foo" })).toBe("foo");
});

test("call simple Object with other params", () => {
  function sum(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b;
  }
  expect(foo.$call({}, 1, 2)).toBe(3);
});
