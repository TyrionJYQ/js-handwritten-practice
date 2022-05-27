import initFlat from "../src/flat";

initFlat();

test("flat arr", () => {
  expect([1, 2, [[3, 4], 5]]._flat(1).length).toBe(4);
});

test("flat arr", () => {
  expect([1, 2, [[3, 4, [5]], 5, [[[[6]]]]]]._flat().length).toBe(5);
});
