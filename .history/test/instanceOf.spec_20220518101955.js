import { instance_Of } from "../src/instanceOf";

test("1 instance_Of Number return false", () => {
  expect(instance_Of(1, Number)).tobe(false);
});
