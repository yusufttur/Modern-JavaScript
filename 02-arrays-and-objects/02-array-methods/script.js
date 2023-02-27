let x;

const arr = [34, 45, 67, 98, 36, 78];
console.log(arr);

arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(99);
console.log(arr);

arr.shift();
console.log(arr);

arr.reverse();
console.log(arr);

x = arr.includes(20); //false

x = arr.indexOf(45); //4 -> reversed arr

x = arr.reverse();

x = arr.slice(1); //[45, 67, 98, 36, 78]
console.log(x);

x = arr.slice(1, 4); //[45, 67, 98]
console.log(x);

x = arr.splice(1, 4); //[45, 67, 98, 36] ->change the initial arr
console.log(x);
console.log(arr); //[34, 78]

x = arr.splice(3, 1);
