import { registerCallApplyBind } from "../src/call-apply-bind";

registerCallApplyBind();

test("call simple Object", () => {
  function foo() {
    return this.foo;
  }
  expect(foo.$call({ foo: "foo" }));
});
