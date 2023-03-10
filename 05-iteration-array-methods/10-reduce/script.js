const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together -> acc, currentV, initialV (0)
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); //55

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum2); //65

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  return acc;
};
console.log(sum3());

const sum4 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum4());

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const totalPrices = cart.reduce((acc, product) => {
  return (acc += product.price);
}, 0);
console.log(totalPrices); //480
