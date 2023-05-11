// Task 1.2 // Complete the isPositive function below. It has one integer parameter a .
// If the value of a is positive, it must return the string YES. Otherwise, it must throw an
// Error according to the following rules:
// 1. If a is 0, throw an Error with message = Zero Error.
// 2. If a is negative, throw an Error with message = Negative Error.

function isPositive(a) {
  if (a > 0) {
    return "YES";
  }
  if (a === 0) {
    throw new Error("Zero Error");
  }
  if (a < 0) {
    throw new Error("Negativ Error");
  }
}

console.log(isPositive(0));
