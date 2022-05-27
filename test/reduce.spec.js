import init from "../src/reduce";
init();
test("_reduce [1,2]", () => {
  expect(
    [1, 2, 5]._reduce((prev, next) => {
      return prev + next;
    })
  ).toBe(8);

  expect(
    [1, 2]._reduce((prev, next) => {
      return prev + next;
    }, 5)
  ).toBe(8);

  expect(
    [1, 2]._reduce((prev, next) => {
      return prev * next;
    }, 5)
  ).toBe(10);
});
