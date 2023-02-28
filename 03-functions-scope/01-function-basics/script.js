// Define a function
function sayHello() {
  console.log('Hello World');
}

// Invoke, execute or call a function
sayHello(); //Hello World

// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}
// Invoke function with arguments
add(3, 4); //7

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
  return num1 - num2;
}

// Assign the returned value to a variable
const x = subtract(8, 2);
console.log(subtract(5, 1)); //4
console.log(x); //6
