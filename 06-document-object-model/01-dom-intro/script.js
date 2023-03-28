// Global window object
console.log(window);

// The document object is part of the window object
console.log(document);
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);
console.log(document.body.innerHTML); // body html
console.log(document.body.innerText); // texts in body
console.log(document.links[0]); // HTML Collection Array

// We can set properties of elements
// document.body.innerHTML = '<h1>Hello from body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');

// We also have methods to select elements more directly
console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1> Hello from main</h1>';
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Yusuf';
