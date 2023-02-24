// String
const firstName = 'Yusuf';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null; //object

// Undefined
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 45675675675678658465387546n;

// Reference Types
const numbers = [1, 2, 3, 4, 5];

const person = {
  name: 'Yusuf',
}; //object

function sayHello() {
  console.log('Hello');
} //function

const output = sayHello;

console.log(output, typeof output);
