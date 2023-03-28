const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log('run');

  // Changing the classes with className
  console.log(itemList.className);
  // text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList); // DOMTokenList(2) ['item-list', 'items', value: 'item-list items']

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c)); // item-list, items

  // Add, remove, toggle, replace
  // text.classList.add('dark');
  // text.classList.remove('card');
  // text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    index === 2 ? (item.style.color = 'blue') : (item.style.color = 'red');
  });
}

document.querySelector('button').onclick = run;
