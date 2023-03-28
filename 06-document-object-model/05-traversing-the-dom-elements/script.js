let output;

// Get child elements from a parent

const parent = document.querySelector('.parent');

output = parent.children; // HTMLCollection(3) [div.child, div.child, div.child]
output = parent.children[1]; // div.child
// console.dir(output);

output = parent.children[1].innerText; // Child 2

output = parent.children[1].className; // child

output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement; // div
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Get sibling elements

const secondItem = document.querySelector('.child:nth-child(2)'); // css pseudo selector

output = secondItem;
output = secondItem.nextElementSibling; // node=element

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';
console.log(output);
