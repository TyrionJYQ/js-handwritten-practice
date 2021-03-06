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

test("apply null without params", () => {
  function sum(a, b) {
    this.a = a;
    this.b = b;
    return this;
  }
  expect(sum.$apply(null).a).toBe(undefined);
});

test("bind without new [1,2]", () => {
  function sum(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return this.a + this.b + this.c;
  }
  expect(sum.$bind(null, 1, 2)(3)).toBe(6);
});

test("bind with new [1,2]", () => {
  function sum(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    return this.a + this.b + this.c;
  }
  var fn = sum.$bind(null, 1, 2);
  expect(new fn(3).c).toBe(3);
});
