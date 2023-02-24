console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

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
