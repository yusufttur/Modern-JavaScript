//This is a single line code -> CMD + K + C to remove CMD + K + U

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

// Shortcuts
// CMD|CTRL + LEFT/RIGHT -> jump beginning or end of the line
// CMD + SHIFT + UP/DOWN -> highlight lines
// SHIFT + OPT|ALT + UP/DOWN -> copy the line
// CMD|CTRL + D -> display multiple same things
// CMD|CTRL + L -> edit multiple same things
// OPT|ALT + click -> multi select
// CMD|CTRL +SHIFT + O -> search file in project
// CMD|CTRL +SHIFT + F -> search word in project
// CMD + B -> toggle sidebar
// CTRL + ~ -> toggle terminal

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Yusuf', email: 'yusuf@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10 px; background-color: white; color: green';
console.log('%cHello World', styles);
