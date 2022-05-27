import uniqueArrWithSet, { uniqueArrWithReduce } from "../src/unique-array";

test("uniqueArrWithSet([1,2,3,1,1,2]) return [1,2,3] ", () => {
  expect(uniqueArrWithSet([1, 2, 3, 1, 1, 2]).toString()).toBe("1,2,3");
});

test("uniqueArrWithReduce([1,2,3,1,1,2]) return [1,2,3] ", () => {
  expect(uniqueArrWithReduce([1, 2, 3, 1, 1, 2]).toString()).toBe("1,2,3");
});

test("uniqueArrWithReduce([]) return [] ", () => {
  expect(uniqueArrWithReduce([]).toString()).toBe("");
});
