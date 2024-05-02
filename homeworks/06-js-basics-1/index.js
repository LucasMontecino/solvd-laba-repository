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

// 6 https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s) {
  let result = "";

  function isEven(value) {
    return value % 2 === 0;
  }

  if (isEven(s.length)) {
    result += `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  } else {
    result += `${s[Math.floor(s.length / 2)]}`;
  }

  return result;
}

// 7 https://www.codewars.com/kata/partition-on
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {
  let pivoteIndex = 0;

  for (let i = 0; i < items.length; i++) {
    if (!pred(items[i])) {
      const aux = items[i];

      for (let j = i; j > pivoteIndex; j--) {
        items[j] = items[j - 1];
      }

      items[pivoteIndex] = aux;
      pivoteIndex++;
    }
  }
  return pivoteIndex;
}

// 9 https://www.codewars.com/kata/find-the-odd-int

function findOdd(A) {
  let obj = {};

  for (let i = 0; i < A.length; i++) {
    let curr = A[i];

    obj[curr] = obj[curr] + 1 || 1;
  }

  function isEven(value) {
    return value % 2 === 0;
  }

  for (let key in obj) {
    if (!isEven(obj[key])) return +key;
  }
}

// 10 https://www.codewars.com/kata/find-the-parity-outlier

function findOutlier(integers) {
  let result = {
    even: [],
    odd: [],
  };

  function isEven(value) {
    return value % 2 === 0;
  }

  for (let i = 0; i < integers.length; i++) {
    let curr = integers[i];

    if (!isEven(curr)) {
      result.odd.push(curr);
    } else {
      result.even.push(curr);
    }
  }

  return result.even.length === 1 ? result.even[0] : result.odd[0];
}

// 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  let result = [];

  for (let i = 0; i < a0.length; i++) {
    if (a1[i] != null) result.push(fn(a0[i], a1[i]));
  }

  return result;
}
