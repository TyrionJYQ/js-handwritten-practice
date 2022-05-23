import Aop from "../src/aop";
Aop();
const arr = [];
const fn = function () {
  arr.push(2);
};

test("wrapper fn", () => {
  const newFn = fn
    .before(() => {
      arr.push(1);
    })
    .after(() => {
      arr.push(3);
    });
  newFn();
  expect(arr.toString()).toBe("1,2,3");
});

const arr2 = [],
  thisArr = [];
const obj = {
  foo: "foo",
};
var foo = "foo1";
const fn2 = function () {
  thisArr.push(this);
  arr2.push("foo");
};

test("wrapper fn2", () => {
  const newFn2 = fn2
    .before(function () {
      thisArr.push(this);
      arr2.push(this.foo);
    })
    .after(function () {
      thisArr.push(this);
      arr2.push(this.foo);
    });

  obj.newFn2 = newFn2;
  obj.newFn2();
  expect(arr2.toString()).toBe("foo,foo,foo");
  expect(thisArr[0]).toBe(obj);
  expect(thisArr[1]).toBe(obj);

  expect(thisArr[2]).toBe(obj);
});
