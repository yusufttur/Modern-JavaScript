/*
Memory Creation Phase:
1. Create the global object (browser = window, Node.js = global)
2. Create the 'this' object and bind it to the global object
3. Setup memory heap for storing variables and function references
4. Store functions and variables in global execution context and set to "undefined"
Execution Phase:
1. Execute code line by line
2. Create a new execution context for each function call
*/

//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
