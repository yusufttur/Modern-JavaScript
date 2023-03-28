// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second </li>';
}

// Replace All Items
function replaceAllItems() {
  const allItems = document.querySelectorAll('li');
  allItems.forEach((li, index) => {
    //li.outerHTML = '<li>Replaced all</li>';

    // if (index === 1) {
    //   li.innerHTML = 'Second Item';
    // } else {
    //   li.innerHTML = 'Replace All';
    // }

    index === 1
      ? (li.innerHTML = 'Second Item')
      : (li.innerHTML = 'Replace All');
  });
}

// replaceChild() Method
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
