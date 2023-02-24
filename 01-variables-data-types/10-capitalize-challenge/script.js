// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

// Solution 1
const myNewString1 = myString
  .charAt(0)
  .toUpperCase()
  .concat(myString.substring(1));
console.log(myNewString1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
const myNewString2 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString2);

// Solution 3 (Uses template literal and slice())
const myNewString3 = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString3);
