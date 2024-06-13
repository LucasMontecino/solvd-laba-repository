var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
    }
    BasicCalculator.prototype.add = function (num1, num2) {
        var result = {
            value: num1 + num2,
            error: "",
        };
        return result;
    };
    BasicCalculator.prototype.subtract = function (num1, num2) {
        var result = {
            value: num1 - num2,
            error: "",
        };
        return result;
    };
    BasicCalculator.prototype.multiply = function (num1, num2) {
        var result = {
            value: num1 * num2,
            error: "",
        };
        return result;
    };
    BasicCalculator.prototype.divide = function (num1, num2) {
        if (num2 === 0)
            return "Cannot divide by zero";
        var result = {
            value: num1 / num2,
            error: "",
        };
        return result;
    };
    BasicCalculator.prototype.power = function (base, exponent) {
        if (exponent < 0)
            return "Exponent must be a positive integer";
        var result = {
            value: Math.pow(base, exponent),
            error: "",
        };
        return result;
    };
    BasicCalculator.prototype.sqrt = function (num) {
        if (num < 0)
            return "Cannot calculate square roots of negative number";
        var result = {
            value: Math.sqrt(num),
            error: "",
        };
        return result;
    };
    return BasicCalculator;
}());
var calculator = new BasicCalculator();
console.log(calculator.add(2, 5));
console.log(calculator.sqrt(9));
console.log(calculator.power(2, -2));
console.log(calculator.sqrt(-6));
