let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;
console.log(x); //{id: 1, name: 'Buy milk', completed: false}

const person = {
  address: {
    coords: {
      lat: 42.9395,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };

console.log(obj3); //{obj1: {…}, obj2: {…}}

console.log({ ...obj1, ...obj2 }); //{a: 1, b: 2, c: 3, d: 4}

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); //{a: 1, b: 2, c: 3, d: 4}

const todos = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;
console.log(x); //Buy milk

x = Object.keys(todo);
console.log(x); //(3) ['id', 'name', 'completed']

x = Object.keys(todo).length;
console.log(x); //3

x = Object.values(todo);
console.log(x); //(3) [1, 'Buy milk', false]

x = Object.entries(todo);
console.log(x); //(3) [Array(2), Array(2), Array(2)]

x = todo.hasOwnProperty('name');
console.log(x); //true

x = todo.hasOwnProperty('age');
console.log(x); //false
