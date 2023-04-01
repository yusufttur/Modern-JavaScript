function onClear() {
  const itemList = document.querySelector('ul');
  // itemList.innerHTML = '';

  const items = itemList.querySelectorAll('li');
  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener -> only one event can listen in this format
const clearButton = document.querySelector('#clear');

// clearButton.onclick = function () {
//   alert('Clear Items');
// };

// clearButton.onclick = function () {
//   console.log('Clear Items');
// };

// addEventListener() -> more than one event can listen in this format
// clearButton.addEventListener('click', () => alert('Clear Items'));
clearButton.addEventListener('click', () => console.log('Clear Items'));

// Use named function
clearButton.addEventListener('click', onClear);

// removeEventListener()
// setTimeout(() => clearButton.removeEventListener('click', onClear), 5000);

// Fire off event from JS
// setTimeout(() => clearButton.click(), 5000);
