console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
console.log(a); //20

a = 10 && 20 && 30;
console.log(a); //30

a = 10 && 0 && 30;
console.log(a); //0

a = 10 && '' && 0 && 30;
console.log(a); //''

const posts = [];
posts.length > 0 && console.log(posts[0]); //''

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
console.log(b); //10

b = 0 || 20; //20
console.log(b);

b = 0 || null || '' || undefined;
console.log(b); //undefined (all falsy)

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
console.log(c); //10

c = null ?? 20; //20
console.log(c);

c = undefined ?? 30; //30
console.log(c);

c = 0 ?? 30; //0
console.log(c);

c = '' ?? 30;
console.log(c); //''
