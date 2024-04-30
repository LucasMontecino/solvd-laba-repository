// 1 http://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number && number !== 0
    ? -number
    : number === 0
    ? number
    : "Please enter a number";
}

// 2 http://www.codewars.com/kata/basic-mathematical-operations

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

// 3 http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(array) {
  return array.join(",");
}

// 4 http://www.codewars.com/kata/transportation-on-vacation
