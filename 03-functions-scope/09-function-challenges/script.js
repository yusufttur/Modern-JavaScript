// Challenge 1
const getCelcius = (fahrenheit) => {
  const tempretatur = Math.round(((fahrenheit - 32) * 5) / 9);
  return `The tempretatur is ${tempretatur} \xB0C`;
};
console.log(getCelcius(100));

// Challenge 2
const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return `min: ${min}, max: ${max}`;
};

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (length, width) {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${
      length * width
    }.`
  );
})(10, 5);
