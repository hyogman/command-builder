const commandBuilder = require("./index");

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

const calculator = commandBuilder(commands);

const multiResult = calculator("multiply", 5, 1);
const addResult = calculator("add", 5, 1);
