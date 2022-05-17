import _create from "../src/create";

test('create({foo:"foo"})', () => {
  expect(_create({ foo: "foo" }).foo).toBe(foo);
});
