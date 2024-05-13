// 1 https://www.codewars.com/kata/opposite-number

function opposite(number) {
  return number == 0 ? number : -number;
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
  let middleS = s.length / 2;

  function isEven(value) {
    return value % 2 === 0;
  }

  if (isEven(s.length)) {
    result += `${s[middleS - 1]}${s[middleS]}`;
  } else {
    result += `${s[Math.floor(middleS)]}`;
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
  let firstThreeValues = integers.slice(0, 3);
  let evenCount = 0;

  function isEven(number) {
    return number % 2 === 0;
  }

  for (let curr of firstThreeValues) {
    if (isEven(curr)) evenCount++;
  }

  let oddCount = 3 - evenCount;
  let mayorityType = evenCount > oddCount ? "even" : "odd";

  for (let curr of integers) {
    if (mayorityType === "even") {
      if (!isEven(curr)) return curr;
    } else {
      if (isEven(curr)) return curr;
    }
  }
}

// 11 https://www.codewars.com/kata/zipwith

function zipWith(fn, a0, a1) {
  let result = [];

  for (let i = 0; i < a0.length; i++) {
    if (a1[i] != null) result.push(fn(a0[i], a1[i]));
  }

  return result;
}

// I started today's work here 02-05-24

// 12 https://www.codewars.com/kata/filter-the-number

function filterString(value) {
  let result = "";

  for (let curr of value) {
    if (Number(curr) || curr === "0") {
      result += curr;
    }
  }

  return Number(result);
}

// 13 https://www.codewars.com/kata/n-th-fibonacci

function nthFibo(n) {
  if (n === 1) return 0;

  if (n === 2 || n === 3) {
    return 1;
  }

  if (!n || n < 0) return "Please enter a valid position of the fibo sequence.";

  return nthFibo(n - 1) + nthFibo(n - 2);
}

// 14 https://www.codewars.com/kata/cat-and-mouse-2d-version/

// 15 https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  let str = word.toLowerCase();

  let result = "";
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    for (let j = i + 1; j < str.length; j++) {
      if (curr === str[j]) {
        obj[curr] = 1;
      }
    }
  }

  for (let val of str) {
    if (obj[val]) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

// 16 https://www.codewars.com/kata/5693239fb761dc8670000001

function isValid(num) {
  if (num.length > 1 && num.charAt(0) === "0") return false;

  return true;
}

function val(a, pos) {
  if (pos >= a.length || pos < 0) return 0;

  return parseInt(a.charAt(pos));
}

function addString(a, b) {
  let sum = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let t = val(a, i) + val(b, j) + carry;
    sum = (t % 10) + sum;
    carry = Math.floor(t / 10);
    i--;
    j--;
  }
  if (carry > 0) sum = carry + sum;

  return sum;
}

function checkAdditions(res, a, b, c) {
  if (!isValid(a) || !isValid(b)) return false;

  let sum = addString(a, b);
  if (sum === c) {
    res.push(sum);
    return true;
  }

  if (c.length <= sum.length || sum !== c.substring(0, sum.length))
    return false;
  else {
    res.push(sum);
    return checkAdditions(res, b, sum, c.substring(sum.length));
  }
}

function findAdditiveNumbers(num) {
  let res = [];
  let l = num.length;

  for (let i = 1; i <= l / 2; i++) {
    for (let j = 1; j <= (l - i) / 2; j++) {
      if (
        checkAdditions(
          res,
          num.substring(0, i),
          num.substring(i, i + j),
          num.substring(i + j)
        )
      ) {
        res.unshift(num.substring(i, i + j));
        res.unshift(num.substring(0, i));
        return res;
      }
    }
  }
  res = [];
  return res;
}

// I couln't pass this kata, I will try it in the future

// 17 https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let result = [];

  for (let i = 0; i < nFloors; i++) {
    result.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return result;
}

// 18 https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (curr === " ") continue;
    else result.push(str.slice(0, i) + curr.toUpperCase() + str.slice(i + 1));
  }

  return result;
}

// 19 https://www.codewars.com/kata/59d398bb86a6fdf100000031

function stringBreakers(n, string) {
  let value = string.split(" ").join("");

  let result = "";

  for (let i = 0; i < value.length; i++) {
    if (i % n === 0 && i !== 0) {
      result = result + "\n" + value[i];
    } else {
      result = result + value[i];
    }
  }

  return result;
}

// 20 https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  let value = url.replace("http://", "");
  value = value.replace("https://", "");
  value = value.replace("www.", "");

  return value.split(".")[0];
}
