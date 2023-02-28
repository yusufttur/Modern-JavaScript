// Immediately Invoked Function Expressions
// IFFE Syntax (Has it's own scope and runs right away)

// const user = 'John'; // Uncaught SyntaxError: Identifier 'user' has already been declared

(function () {
  const user = 'John';
  console.log(user); // John
  const hello = () => console.log('Hello from the IIFE');
  hello(); // Hello from the IIFE
})();

// hello() // Uncaught ReferenceError: hello is not defined

// Params
(function (name) {
  console.log('Hello ' + name);
})('Shawn'); // Hello Shawn

// Named IIFE (Can only be called recursively)
(function hello() {
  console.log('Hello');
})(); // Hello
