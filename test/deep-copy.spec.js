import deepCopy from "../src/deep-copy";

test("copy object", () => {
  const obj = {
    foo: "foo",
    bar: {
      bar: "bar",
    },
  };
  const copyObj = deepCopy(obj);
  copyObj.bar.bar = "barCopy";
  expect(copyObj.bar.bar).toBe("barCopy");
  expect(obj.bar.bar).toBe("bar");
});

test("copy array", () => {
  const arr = [1, [1, 2]];
  const copyArr = deepCopy(arr);
  copyArr[1][0] = "3";
  expect(copyArr[1][0]).toBe("3");
  expect(arr[1][0]).toBe(1);
});

test("copy circular object", () => {
  const a = {
    name: "sunshine_lin",
    age: 23,
    hobbies: { sports: "篮球", tv: "雍正王朝" },
    works: ["2020", "2021"],
  };
  a.key = a; // 环引用
  const b = deepCopy(a);
  expect(a === b).toBe(false);
});
