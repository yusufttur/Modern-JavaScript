let x;

const name = 'John';
const age = 31;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');

x = typeof s; //object

x = s.length; //11

// Access value by key
x = s[0]; //H
console.log(x);
// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;
// console.log(s);

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0); //H

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d'); //10

// substring() - search a string for a specified value
x = s.substring(2, 5); //llo
x = s.substring(7); //orld

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6); //Hello reverse index

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'John'); //Hello John

// includes() - returns true if the string is found
x = s.includes('Hell'); //true

// valueOf() - returns the primitive value of a variable
x = s.valueOf(); //Hello World

// split() - returns an array of strings
x = s.split(''); //['Hello', 'World']
