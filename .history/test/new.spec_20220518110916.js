import _new from "../src/new";

function Chinese(country) {
  this.country = country;
}

function Person(age) {
  this.age = age;
  return {};
}

test("new Chinese return a Chinese instance", () => {
  expect(_new(Chinese, "China").country).toBe("China");
});

test("new Person return a {}", () => {
  expect(_new(Person, 18).age).toBe(undefined);
});

test("new Chinese instanceof Chinese return true", () => {
  expect(_new(Chinese, "China") instanceof Chinese).toBe(true);
});
