// document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id); // app-title
console.log(document.getElementById('app-title').className); //

// Get attributes
console.log(document.getElementById('app-title').getAttribute('id')); // app-title

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title'); // class='title'

const title = document.getElementById('app-title');
console.log(title);

// Get/change content
console.log(title.textContent); // Shopping List
title.textContent = 'Hello World';
title.innerText = 'Hello again';
title.innerHTML = '<strong>Shopping</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'darkgray';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1')); //select the first h1 unlike jquery (selects all h1)
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText); // Orange Juice

// Use any CSS selector
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li'); //first element
firstItem.style.color = 'blue';
