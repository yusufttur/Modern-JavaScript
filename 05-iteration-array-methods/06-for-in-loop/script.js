// Loop through objects
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'black',
  color5: 'white',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// Loop through arrays
const colorArr = ['red', 'blue', 'green', 'black', 'white'];

for (const color in colorArr) {
  console.log(colorArr[color]);
}
