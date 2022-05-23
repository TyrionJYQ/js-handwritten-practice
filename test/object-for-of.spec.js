import ObjectSymbolIterator, {
  iteratorable,
  itertorObj,
} from "../src/object-for-of";

test("obj without ObjectSymbolIterator", () => {
  let obj = {
    foo: "foo",
    bar: "bar",
  };
  expect(() => {
    for (let i of obj) {
    }
  }).toThrowError();
});

test("obj with ObjectSymbolIterator", () => {
  let obj = {
    foo: "foo",
    bar: "bar",
  };
  ObjectSymbolIterator(obj);
  const arr = [];
  for (let key of obj) {
    arr.push(key);
  }
  expect(arr.toString()).toBe("foo,bar");
});
