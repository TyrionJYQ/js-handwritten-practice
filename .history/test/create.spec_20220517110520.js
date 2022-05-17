import { create } from "../src/create";

test('create({foo:"foo"})', () => {
  expect(create({ foo: "foo" }, {}).foo).toBe("foo");
});

test("create with null", () => {
  expect(create()).toThrowError(
    /create function first params  of  target should Object but got/
  );
});
