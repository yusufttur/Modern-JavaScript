// while loop => use when you don't know the number of the loop
// for loop => use if you know the number of the loop

let i = 0;
// while (i <= 20) {
//   console.log('Number ' + i);
//   i++;
// }

// Loop over arrays
// const arr = [10, 20, 30, 40, 50];
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting while loops
// while (i <= 5) {
//   console.log('Number ' + i);
//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// do - while => runs at least once
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);
