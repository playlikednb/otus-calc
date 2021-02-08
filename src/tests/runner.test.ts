import runner from "../engine/runner";

test("runner: 1 * 10", () => {
  expect(runner("1 * 10")).toEqual(10);
});

test("runner: 1 + 2 * 10", () => {
  expect(runner("1 + 2 * 10")).toEqual(21);
});

test("runner: 1 + -2", () => {
  expect(runner("1 + -2")).toEqual(-1);
});

test("runner: 2 + 3 * 6 - 5", () => {
  expect(runner("2 + 3 * 6 - 5")).toEqual(15);
});