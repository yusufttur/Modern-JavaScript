// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age); //30

//Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, //renaming
  title,
  user: { name }, //destructuring
} = todo;
console.log(todoId, title); //1 'Take out trash'
console.log(name); //John
console.log(todoId); //1

// Destructuring Arrays
const numbers = [32, 65, 34, 78];
const [first, second, ...rest] = numbers; //rest operators
console.log(first, second, rest); //32 65 (2) [34, 78]
