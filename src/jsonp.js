const BASE_URL = "your_base_url?";
const id = 0;
export default function jsonp(url, params) {
  const callbackFn = "json_callabck" + id++;
  url = `${BASE_URL}${execParams(params)}&callback=${callbackFn}`;
  window[callbackFn] = function (data) {
    console.log(data);
  };
  const script = document.createElement("script");
  const container = document.querySelector("head");
  container.appendChild(script);
  script.src = url;
  script.onload = function () {
    delete window[callbackFn];
  };
}

function execParams(params) {
  return Object.keys(params).reduce((query, cur, index) => {
    query += `${index ? "&" : "?"}${cur}=${params[cur]}`;
    return query;
  }, "");
}
