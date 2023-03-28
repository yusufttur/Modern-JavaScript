// querySelectorAll()
const listItems = document.querySelectorAll('.item'); // item class

//Node List vs HTML Collection
// Returns a NodeList - > usage of high order arrays
console.log(listItems); // NodeList(4) [li.item, li.item, li.item, li.item]
console.log(listItems[1].innerText); // Orange Juice

/*with HTML Collection: needs to be converted to an array to be used in array */

// Setting a color for specific element
// listItems[1].style.color = 'red';

// We can use forEach() on a NodeList
// listItems.forEach((item, index) => {
//   item.style.color = 'blue';

//   // Access elements by index
//   if (index === 2) {
//     item.remove(); //remove Oreos
//   }

//   if (index === 0) {
//     item.innerHTML = `Orange
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>
//   </li>`;
//   }
// });

// getElementsByClassName()
const listItems2 = document.getElementsByClassName('item');

// Returns an HTMLCollection
console.log(listItems2); // HTMLCollection(4) [li.item, li.item, li.item, li.item]
console.log(listItems2[2].innerText); // Oreos

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((element) => {
  console.log(element.innerText);
}); // Apples Orange Juice Oreos Milk

// getElementsByTagName()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); // HTMLCollection(4) [li.item, li.item, li.item, li.item]
console.log(listItems3[0].innerText); // Apples
