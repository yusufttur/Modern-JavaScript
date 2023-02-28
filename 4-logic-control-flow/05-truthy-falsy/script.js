// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const email = 'test@example.com';

if (email) {
  console.log('You passed an email');
} // true
console.log(Boolean(email)); // true

const x = function () {};
if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}
console.log(Boolean(x)); //true

// Truthy and falsy caveats
const children = 3;

// Checking for literal 0
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Solution
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = [];

// Always true even when empty
if (posts) {
  console.log('List Posts'); //true
} else {
  console.log('No Posts To List');
}

// Solution -> check empty array
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List'); //'No Posts To List
}

// Checking for empty objects
const user = {};

// Always true, even when no properties
if (user) {
  console.log('List User'); // List User
} else {
  console.log('No User');
}

// Solution -> check empty object
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User'); //No User
}

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// Strict Equality
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
