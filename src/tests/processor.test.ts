import { firstPrioritiesCalc, secondPrioritiesCalc } from '../engine/processor';

test("firstPrioritiesCalc: [1 * 5]", () => {
  expect(firstPrioritiesCalc([1, "*", 5])).toEqual([5]);
});


test("firstPrioritiesCalc: [10 / 5]", () => {
  expect(firstPrioritiesCalc([10, "/", 10])).toEqual([1]);
});

test("firstPrioritiesCalc: [10 + 10]", () => {
  expect(firstPrioritiesCalc([10, "+", 10])).toEqual([10, "+", 10]);
});

test("secondPrioritiesCalc: [10 + 10]", () => {
  expect(secondPrioritiesCalc([10, "+", 10])).toEqual(20);
});

test("secondPrioritiesCalc: [10 - 10]", () => {
  expect(secondPrioritiesCalc([10, "-", 10])).toEqual(0);
});
