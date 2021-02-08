import parser from './parser';
import { firstPrioritiesCalc, secondPrioritiesCalc } from "./processor";

export default (inputValue: string): number => {
  const stack = parser(inputValue);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const firstPrioritiesRes = firstPrioritiesCalc(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
}