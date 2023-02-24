// Primitive values is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Yusuf',
  age: 35,
};

let newName = name;
newName = 'Jane';

let newPerson = person;
newPerson.name = 'Joseph';
newPerson.age = 45;

console.log(name, newName); // John, Jane
console.log(person, newPerson); // { name: 'Joseph', age: 45 }, { name: 'Joseph', age: 45 }
