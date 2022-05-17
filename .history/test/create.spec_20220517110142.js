import { create } from "../src/create";

test('_create({foo:"foo"})', () => {
  expect(create({ foo: "foo" }, {}).foo).toBe("foo");
});
