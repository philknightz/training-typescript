import { Operation } from "./Operation";

export class Caculator {
  private operation: Map<string, Operation> = new Map<string, Operation>();

  register(operationName: string, operation: Operation): Caculator {
    this.operation.set(operationName, operation);
    return this;
  }

  caculate(operationName: string, number1: number, number2: number): number {
    const operation = this.operation.get(operationName);

    if (!operation) {
      throw new Error(`operation [${operationName}] not supported`);
    }

    return operation.run(number1, number2);
  }
}
