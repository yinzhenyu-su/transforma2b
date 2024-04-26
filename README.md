# Transforma2B

Transforma2B is a data transformation tool that helps you convert data from one format to another.

## Description

This project is all about transforming data. It's designed to make it easy to convert data from one format to another, hence the name "Transforma2B" or "A2B".

## Installation

To install the project, you can use pnpm or any other package manager:

```bash
pnpm add transforma2b
```

### Usage

The project provides a `transformA2B` function that you can use to convert data types. For example:

```ts
const a = { a: "test" };
const { data, transform } = transformA2B(a, (a) => {
  return {
    ...a,
    b: "test",
  };
}).transform((b) => {
  return {
    ...b,
    c: "test" as "test",
  };
});

console.log(data); // { a: "test", b: "test", c: "test"}
```

## Run test

We used Vitest to run the tests. You can run all the tests with the following command:

```bash
pnpm run test
```

## Contribution

If you want to contribute to this project, you are welcome to submit a PR.

## License

This project is under the MIT license.
