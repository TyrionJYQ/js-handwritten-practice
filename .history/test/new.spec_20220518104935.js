import _new from "../src/new";

function Chinese(country) {
  this.country = country;
}

test("new Chinese return a Chinese instance", () => {
  expect(_new(Chinese, "China").country).toBe("China");
});
