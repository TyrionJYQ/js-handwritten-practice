import { registerCallApplyBind } from "../src/call-apply-bind";

registerCallApplyBind();

test("call simple Object", () => {
  function foo() {
    console.log(this.foo);
  }
  expect();
});
