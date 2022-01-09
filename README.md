# trainning-typescripts

Demo about OOP - Design by Contract & teamworking with Calculator example code

---

# PREREQUISITES:

```sh
yarn install
```

# Calculator Command

```sh
ts-node src/index.ts <number1> <operation> <number2>
```

Where

- `number1`, `number2` are the given numbers
- `operation` is one of `+`, `-`, `x`, `/`

Example:

```sh
ts-node src/index.ts 1 + 2
```

# Start Caculator server

```sh
docker-compose up
```

# Calculator server Command

```sh
curl http://localhost:3000/caculate?number1=<number1>&number2=<number2>&operation=<operation>
```

Where

- `number1`, `number2` are the given numbers
- `operation` is one of `+`, `-`, `x`, `/`

Example:

```sh
curl http://localhost:3000/caculate?number1=11&number2=15&operation=x
```
