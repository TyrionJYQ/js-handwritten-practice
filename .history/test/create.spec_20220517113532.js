import { create } from "../src/create";

test('create({foo:"foo"})', () => {
  expect(create({ foo: "foo" }, {}).foo).toBe("foo");
});

test("create with null", () => {
  expect(() => {
    create();
  }).toThrow();
});

test("create({bar:'bar'}) return a object __proto__ has  a key bar with value bar", () => {
  expect(
    create())
  }).toThrow();
});
