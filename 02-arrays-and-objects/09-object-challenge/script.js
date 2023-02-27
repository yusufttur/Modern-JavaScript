//Step 1
const library = [
  {
    title: '1984',
    author: 'George Orwell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Les Misreables',
    author: 'Victor Hugo',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Hamlet',
    author: 'Shakespear',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step 3
const { title: firstBook } = library[0];
console.log(firstBook); //1984

// Step 4
const librarbyJSON = JSON.stringify(library);
console.log(librarbyJSON);
