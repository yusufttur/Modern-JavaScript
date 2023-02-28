// Open 'sources' tab and put a breakpoint at the first() function

// LIFO
// Invokde, Pushed on, ends, then Popped off
// First Example

// function first() {
//   console.log('first...');
// }

// function second() {
//   console.log('second...');
// }

// function third() {
//   console.log('third...');
// }

// first();
// second();
// third();

// Second Example

function first() {
  console.log('first...');
  second();
}

function second() {
  console.log('second...');
  third();
}

function third() {
  console.log('third...');
}

first();
