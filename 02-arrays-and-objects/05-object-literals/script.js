let x;

// Creating an object

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Orlando',
    state: 'FL',
  },
  hobbies: ['music', 'sports'],
};

console.log(person); //{name: 'John Doe', age: 30, isAdmin: true}

x = person.name;
console.log(x); //John Doe

x = person['age'];
console.log(x); //30

x = person.address.state;
console.log(x); //FL

x = person.hobbies[0];
console.log(x); //music

person.name = 'Jane Doe';
person['isAdmin'] = false;
console.log(person); // {name: 'Jane Doe', age: 30, isAdmin: false, address: {…}, hobbies: Array(2)}

delete person.age;
console.log(person); //{name: 'Jane Doe', isAdmin: false, address: {…}, hobbies: Array(2)}

person.hasChildren = true;
console.log(person); //{name: 'Jane Doe', isAdmin: false, address: {…}, hobbies: Array(2), hasChildren: true}

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet(); //Hello my name is Jane Doe

const person2 = {
  'first name': 'Joseph',
  'last name': 'Smith',
};

x = person2['first name'];
console.log(x); //Joseph
