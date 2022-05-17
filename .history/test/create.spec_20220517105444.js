import { _create } from "../src/create";

test('_create({foo:"foo"})', () => {
  expect(_create({ foo: "foo" }).foo).toBe("foo");
});
