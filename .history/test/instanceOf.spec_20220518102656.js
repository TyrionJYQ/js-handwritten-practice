import { instance_Of } from "../src/instanceOf";

test("1 instance_Of Number return false", () => {
  expect(instance_Of(1, Number)).toBe(false);
});

test("Number(1) instance_Of Number return false", () => {
  expect(instance_Of(new Number(1), Number)).toBe(true);
});

test("instance not has constructor", () => {
  function P() {}
  const p = new P();
  P.constructor = null;
  expect(instance_Of(p, P)).toBe(true);
});

test("instance not has constructor", () => {
  function P() {}
  function Child() {}
  Object.setPrototypeOf(Child.prototype, new P());
  const c = new Child();
  expect(instance_Of(c, P)).toBe(true);
});
