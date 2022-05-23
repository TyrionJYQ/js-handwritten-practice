import getQueryString from "../src/get-query-string";
test(" https://www.geeksforgeeks.org/javascript-responsive-time-of-an-event/?ref=rp", () => {
  const queryStr =
    "https://www.geeksforgeeks.org/javascript-responsive-time-of-an-event/?ref=rp";
  expect(getQueryString(queryStr).ref).toBe("rp");

  expect(getQueryString("")).toBe(undefined);
});
