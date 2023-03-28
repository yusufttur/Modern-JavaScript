// remove() Method
function removeClearButton() {
  const clearButton = document.querySelector('#clear');
  clearButton.remove();
}

// removeChild() Method
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// Other examples
function removeItem(index) {
  // const li = document.querySelector(`li:nth-child(${index})`);
  // li.remove();

  const li = document.querySelectorAll('li')[index - 1];
  li.remove();
}

function removeItem2(index) {
  const li = document.querySelectorAll('li');
  li[index - 1].remove();
}

const removeitem3 = (index) => {
  document.querySelectorAll('li')[index - 1].remove();
};

// removeClearButton();
// removeFirstItem();
// removeItem(2);
// removeItem2(2);
removeitem3(2);
