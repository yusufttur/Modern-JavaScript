// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

//with while loop
// let i = 1;

// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// ternary
for (let i = 1; i <= 100; i++) {
  i % 3 == 0 && i % 5 == 0
    ? console.log('FizzBuzz')
    : i % 3 == 0
    ? console.log('Fizz')
    : i % 5 == 0
    ? console.log('Buzz')
    : console.log(i);
}
