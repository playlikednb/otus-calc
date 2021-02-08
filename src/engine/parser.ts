import isNumber from "./isNumber";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = Array<number | string> | string;

export default (value: string): ParsedLineType => {
  const result = [];
  const stack = value.split(" ");

  for (let key = 0; key < stack.length; key++) {
    const prevItem = stack[key - 1];
    const item = stack[key];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
  }

  return result;
}