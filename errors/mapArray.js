//Task 1.3
// Convert the code using try...catch.
// function mapArray(arr) {
//  return Array.isArray(arr) ? arr.map((item) => item * 2) : "map is not a function";
// }

function mapArray(arr) {
    try {
        return arr.map((item) => item * 2);
    } catch ({ message }) {
        return message;
    }
};
console.log(mapArray(12));