import cost from "../src/currying";

test("cost(1) return 1", () => {
  cost(1);
  cost(2);
  cost(3);
  expect(cost()).toBe(6);
});
