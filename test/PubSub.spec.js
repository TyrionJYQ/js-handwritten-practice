import PubSub from "../src/pub-sub";
let count = 1;
const pubsub = PubSub();

pubsub.subscribe("increaseCount", (num) => {
  count += num;
});

test("pub-sub", () => {
  pubsub.publish("increaseCount", 1);
  expect(count).toBe(2);
});
