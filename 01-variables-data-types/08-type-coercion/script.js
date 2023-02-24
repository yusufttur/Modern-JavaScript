let x;

// Coerced to a string
x = 5 + '5'; //55 string

x = 5 + Number('5'); //10 number

// Coerced to a number
x = 5 * '5'; //25 number

// null is coerced to 0 as it is a `falsy` value
x = 5 + null; //5

x = Number(null); //0 number
x = Number(true); //1 number
x = Number(false); //0 number

// true is coerced to a 1
x = 5 + true; //6 number

// false is coerced to 0 (falsy)
x = 5 + false; //5 number

// Undefined is coerced to 0 (falsy)
x = 5 + undefined; //NaN number

console.log(x, typeof x);
