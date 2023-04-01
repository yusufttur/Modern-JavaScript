const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}
function onCheck(e) {
  heading.textContent = e.target.checked;
}
function onFocus(e) {
  console.log('input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.color = 'green';
}
function onBlur(e) {
  console.log('input is blurred');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheck);

// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
