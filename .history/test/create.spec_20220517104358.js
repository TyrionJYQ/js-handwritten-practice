import create from "../src/create";

test('create({foo:"foo"})', () => {
  expect(create({ foo: "foo" }).foo).toBe(foo);
});
