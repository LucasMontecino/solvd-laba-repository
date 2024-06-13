type ResultError = string;

interface Result {
  value: number;
  error: ResultError;
}

interface Calculator {
  add(num1: number, num2: number): Result;
  subtract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result | ResultError;
  power(base: number, exponent: number): Result | ResultError;
  sqrt(num: number): Result | ResultError;
}

class BasicCalculator implements Calculator {
  add(num1: number, num2: number): Result {
    const result = {
      value: num1 + num2,
      error: "",
    };
    return result;
  }

  subtract(num1: number, num2: number): Result {
    const result = {
      value: num1 - num2,
      error: "",
    };
    return result;
  }

  multiply(num1: number, num2: number): Result {
    const result = {
      value: num1 * num2,
      error: "",
    };
    return result;
  }

  divide(num1: number, num2: number): Result | ResultError {
    if (num2 === 0) return "Cannot divide by zero";
    const result = {
      value: num1 / num2,
      error: "",
    };
    return result;
  }

  power(base: number, exponent: number): Result | ResultError {
    if (exponent < 0) return "Exponent must be a positive integer";
    const result: Result = {
      value: Math.pow(base, exponent),
      error: "",
    };
    return result;
  }

  sqrt(num: number): Result | ResultError {
    if (num < 0) return "Cannot calculate square roots of negative number";
    const result = {
      value: Math.sqrt(num),
      error: "",
    };
    return result;
  }
}

const calculator = new BasicCalculator();

console.log(calculator.add(2, 5));
console.log(calculator.sqrt(9));
console.log(calculator.power(2, -2));
console.log(calculator.sqrt(-6));
