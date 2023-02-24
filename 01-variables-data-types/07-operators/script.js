// 1. Arithmetic Operators

let x;

x = 5 + 5; //10
x = 5 - 5; //0
x = 5 * 5; //25
x = 5 / 5; //1
x = 7 % 5; //2

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 3; //8

// Increment
x = 1;
// x = x + 1;
x++; //2

// Decrement
// x = x - 1;
x--; //1

// 2. Assignment Operators

x = 10;

x += 5; //15
x -= 5; //10
x *= 5; //50
x /= 5; //10
x %= 5; //0
x **= 5; //0

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == 2; //true
x = 2 == '2'; //true

// Equal to (Type and value)
x = 2 === '2'; //false

// Not equal to (Just the value, not the type)
x = 2 != '2'; //false

// Not equal to (Type and value)
x = 2 !== 2; //false

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
