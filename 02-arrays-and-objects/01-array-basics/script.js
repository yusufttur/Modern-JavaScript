let x;

const numbers = [12, 24, 56, 78, 89];
console.log(numbers);

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange');
console.log(fruits);

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is ${fruits[2]}`;

x = numbers.length; //5

fruits[2] = 'Pear'; // Arrays mutable

x = fruits;

fruits[3] = 'Strawberry';

fruits[fruits.length] = 'Blueberry'; //Add to end of the array

console.log(x);
