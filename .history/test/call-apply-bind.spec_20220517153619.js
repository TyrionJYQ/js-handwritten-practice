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
  expect(sum.$call({}, 1, 2)).toBe(3);
});

test("call null with other params", () => {
  function sum(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b;
  }
  expect(sum.$call(null, 1, 2)).toBe(3);
});

test("apply null with params [1,2]", () => {
  function sum(a, b) {
    this.a = a;
    this.b = b;
    return this;
  }
  expect(sum.$apply(null, ["a", "b"]).a).toBe("a");
});

test("bind without new [1,2]", () => {
  function sum(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return this.a + this.b + this.c;
  }
  expect(sum.$bind(null, 1, 2)).toBe("a");
});
