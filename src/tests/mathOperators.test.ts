import { mul, div, add, minus } from "../engine/mathOperators";

test("mul: 0 * 2 = 0", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul: 1 * 2 = 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul: 2 * 2 = 4", () => {
  expect(mul(2, 2)).toBe(4);
});

test("div: 2 / 2 = 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("div: 4 / 2 = 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("add: 4 + 2 = 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("minus: 4 - 2 = 2", () => {
  expect(minus(4, 2)).toBe(2);
});
