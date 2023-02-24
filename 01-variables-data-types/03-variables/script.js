// Ways to declare a variable
// var, let, const

// ES 2022 no var anymore

//global scope var and let same

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName, age);

var age = 30; // let not worked  for age above
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

//Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;

console.log(score);

if (true) {
  score += 1;
}

console.log(score);

const x = 100;

//x = 200; //const cannot be re-assigned

//const score1; //const has to be initialize

const arr = [1, 2, 3, 4];

//arr = [1, 2, 3, 4, 5];// array cannot be re-assigned
arr.push(5);
console.log(arr);

const person = {
  name: 'Yusuf',
};

person.name = 'John';
person.email = 'john@gmail.com';

console.log(person);

// use const unless not to change later on

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
console.log(d);
console.log(a); //undefined
