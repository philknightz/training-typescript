import { Operation } from "./Operation";

export default class Division implements Operation {
  run(number1: number, number2: number): number {
    if (number2 == 0) {
      throw new Error("Division by zero");
    }
    return number1 / number2;
  }
}
