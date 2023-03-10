// ||= assigns the right side value only if the left is a falsy value.

let a = null;

if (!a) {
  a = 10;
}
console.log(a); //10

a = null;
a = a || 20;
console.log(a); //20

a = null;
a ||= 20;
console.log(a); //20

// &&= assigns the right side value only if the left is a truthy value.

let b = 10;

if (b) {
  b = 20;
}
console.log(b); //20

b = 10;
b = b && 20;
console.log(b); //20

b = 10;
b &&= 20;
console.log(b); //20

// ??= assigns the right side value only if the left is null or undefined.

let c = false;

if (c === null || c === undefined) {
  c = 20;
}
console.log(c); //false

c = null;
c = c ?? 20;
console.log(c); //20

c = null;
c ??= 20;
console.log(c); //20
