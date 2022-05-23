// GET
const xhr = new XMLHttpRequest();
xhr.open("GET", (url = ""));
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == 200) {
  }
};

// POST
xhr.open("post", (url = ""));
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send({
  count: 1,
});
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == 200) {
  }
};
