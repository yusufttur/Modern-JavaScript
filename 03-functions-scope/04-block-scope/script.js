const x = 100;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i); // 0 - 10
}
// if var i => clg(i) -> 0 - 11

// console.log(i); // ReferenceError: i is not defined

// Using var (var is not block scope)
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // 700

// var IS function scoped
function run() {
  var d = 100;
  console.log(d); // 100
}

run();

// console.log(d); // Uncaught ReferenceError: d is not defined

const foo = 1; // Not in the window object, preferred
var bar = 2; // Put on the window object, not preferred
