export default function getQueryString(str) {
  const queryObj = {};
  if (str.indexOf("?") === -1) {
    return undefined;
  } else {
    // https://www.geeksforgeeks.org/javascript-responsive-time-of-an-event/?ref=rp
    // split str with ?

    str
      .split("?")[1]
      .split("&")
      .map((item) => item.split("="))
      .forEach(([key, value]) => {
        queryObj[key] = value;
      });
  }
  return queryObj;
}
