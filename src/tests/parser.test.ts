import parser from "../engine/parser";

test("parser: 1 + 10", () => {
  expect(parser("1 + 10")).toEqual([1, "+", 10]);
});

test("parser: 1 + 10 * 2", () => {
  expect(parser("1 + 10 * 2")).toEqual([1, "+", 10, "*", 2]);
});

test("parser: 1 ! 10 * 2", () => {
  expect(() => parser("1 ! 10 * 2")).toThrow(TypeError);
});
