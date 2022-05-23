import init$map from "../src/map";
init$map();
test("map arr without no this", () => {
  const arr = [1, 2, 3];
  const mapArr = arr.$map((i) => {
    i = i + 1;
  });
  const mapArr2 = arr.$map((i) => i + 1);
  expect(mapArr.length).toBe(3);
  expect(mapArr[1]).toBe(undefined);
  expect(mapArr2[2]).toBe(4);
});

test("map arr without this", () => {
  const arr = [1, 2, 3];
  const mapArr = arr.$map(
    function (i) {
      return this.foo;
    },
    { foo: "foo" }
  );

  expect(mapArr.length).toBe(3);
  expect(mapArr[1]).toBe("foo");
  expect(mapArr[0]).toBe("foo");
});
