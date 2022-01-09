import express from "express";
import { Caculator } from "./Caculator";
import supportOperation from "./config";

const app = express();
const router = express.Router();

const caculator = new Caculator();

supportOperation.forEach(([operationName, operation]) => {
  caculator.register(operationName, operation);
  return;
});

router.get("/caculate", (request, response) => {
  const no1 = parseInt(request.query.number1 as string);
  const no2 = parseInt(request.query.number2 as string);

  return response.json({
    result: caculator.caculate(request.query.operation as string, no1, no2),
  });
});

app.use(router);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
});
