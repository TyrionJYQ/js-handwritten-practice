import { create } from "../src/create";

test('create({foo:"foo"})', () => {
  expect(create({ foo: "foo" }, {}).foo).toBe("foo");
});

test("create with null", () => {
  expect(create()).toThrow(
    new Error("create function first params  of  target should Object")
  );
});
