import { Caculator } from "./Caculator";
import supportOperation from "./config";

const caculator = new Caculator();

supportOperation.forEach(([operationName, operation]) => {
  caculator.register(operationName, operation);
});

const [, , number1, operation, number2] = process.argv;

const formattedNumber1 = parseInt(number1);
const formattedNumber2 = parseInt(number2);

console.log(caculator.caculate(operation, formattedNumber1, formattedNumber2));
