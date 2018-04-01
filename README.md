# command-builder

## Simple contrived example 

```js
const commandBuilder = require("command-builder");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const commands = {
  add,
  subtract,
  multiply,
  divide,
};

// commandBuilder takes an object of functions as an argument

const calculator = commandBuilder(commands);

// Then it returns a function that takes a string of the function key followed by the arguments used for the function

const multiResult = calculator("multiply", 5, 1);
const addResult = calculator("add", 5, 1);

```
