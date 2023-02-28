// 'window' is globally scoped
// alert('Hello');
console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global'); //100 'in global'

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'in function'); //100 'in function'
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'in block');
} //100 'in block'

function add() {
  // Overwriting global x (variable shadowing)
  const x = 1;
  const y = 50; //function scope
  console.log(x + y); //51
}

// Can not access a function scoped variable in global scope
console.log(y);

add();
