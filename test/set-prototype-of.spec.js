import setPrototypeOf from "../src/set-prototype-of";
const foo = {
  foo: "foo",
};
const bar = {
  bar: "bar",
};

test("setPrototypeOf", () => {
  expect(setPrototypeOf(foo, bar).bar).toBe("bar");
});
