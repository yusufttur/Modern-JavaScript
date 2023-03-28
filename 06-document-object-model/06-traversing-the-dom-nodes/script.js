let output;
// Get child elements from a parent
const parent = document.querySelector('.parent');

output = parent.childNodes; // spaces, comment, texts as NodeList

// Get parent elements from a child

output = parent.childNodes[0]; //#text

output = parent.childNodes[0].textContent; // ---
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].textContent; // child 1
output = parent.childNodes[3].outerHTML; // <div class="child">Child 1</div>
output = parent.childNodes[3].innerText = 'Child One'; // Child One
output = parent.childNodes[5].style.color = 'Red'; // Child 2 (red)
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = 'Hello'; //Cretes a new node

// Parent node
const child = document.querySelector('.child');
output = child.parentNode; // <div class="parent">
output = child.parentElement; // <div class="parent">

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)'); // <div class="child" style="color: red;">Child 2</div>
output = secondItem.previousSibling; // #text
output = secondItem.nextSibling; // #text
console.log(output);
