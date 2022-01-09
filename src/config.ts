import { Operation } from "./Operation";

import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";

const supportOperation: [string, Operation][] = [
  ["+", new Addition()],
  ["-", new Subtraction()],
  ["x", new Multiplication()],
  ["/", new Division()],
];

export default supportOperation;
