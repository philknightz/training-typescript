import { Operation } from "./Operation";

export default class Subtraction implements Operation {
  run(number1: number, number2: number): number {
    return number1 - number2;
  }
}
