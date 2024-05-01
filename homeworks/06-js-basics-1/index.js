// 1 https://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number && number !== 0
    ? -number
    : number === 0
    ? number
    : "Please enter a number";
}

// 2 https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
  let result;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      result = `If you don't give a valid operation you've never seen a result.`;
  }

  return result;
}

// 3 https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.join(",");
}

// 4 https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  let result = d * 40;
  return d >= 7 ? (result -= 50) : d >= 3 ? (result -= 20) : result;
}

// 5 https://www.codewars.com/kata/calculating-with-functions

function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function zero(operation) {
  return expression(0, operation);
}
function one(operation) {
  return expression(1, operation);
}

function two(operation) {
  return expression(2, operation);
}

function three(operation) {
  return expression(3, operation);
}

function four(operation) {
  return expression(4, operation);
}

function five(operation) {
  return expression(5, operation);
}

function six(operation) {
  return expression(6, operation);
}

function seven(operation) {
  return expression(7, operation);
}

function eight(operation) {
  return expression(8, operation);
}

function nine(operation) {
  return expression(9, operation);
}

function plus(x) {
  return (y) => y + x;
}

function minus(x) {
  return (y) => y - x;
}

function times(x) {
  return (y) => x * y;
}

function dividedBy(x) {
  return (y) => Math.floor(y / x);
}
