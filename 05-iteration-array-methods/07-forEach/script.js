const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube'];

// View prototype chain
console.log(socials.__proto__); // forEach, find, filter, map, reduce

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));
/*
0 - Twitter (5) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube']
1 - LinkedIn (5) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube']
2 - Facebook (5) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube']
3 - Instagram (5) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube']
4 - YouTube (5) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube']
*/

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
];

socialObjs.forEach((item) => console.log(item));
/*
{name: 'Twitter', url: 'https://twitter.com'}
{name: 'Facebook', url: 'https://facebook.com'}
{name: 'Linkedin', url: 'https://linkedin.com'}
{name: 'Instagram', url: 'https://instagram.com'}
{name: 'YouTube', url: 'https://youtube.com'}
*/
