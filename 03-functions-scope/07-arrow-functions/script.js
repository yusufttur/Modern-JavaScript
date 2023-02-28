//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2)); //3

// Implicit Return
const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // 5

// Can leave off () with a single param
const double = (a) => a * 2;
console.log(double(10)); // 20

// Returning an object, use parenthesis before `{}`
const createObj = () => ({
  name: 'Brad',
});
console.log(createObj()); // {name: 'Brad'}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n); // 1-5
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n)); //1-5
