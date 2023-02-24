let x;

const num = new Number(5.4227);
console.log(num, typeof num); // Number {5} 'object'

x = num.toString();

x = num.length; //undefined
x = num.toString.length; //1
x = num.toFixed(3); //5.423
console.log(x);
console.log(typeof x); //string
x = num.toPrecision(3); //5.42
x = num.toExponential(2); //5.42e+0
x = num.toLocaleString('ar-EG'); //٥٫٤٢٣
x = num.valueOf(); //5.4227
x = Number.MAX_VALUE; //1.7976931348623157e+308
x = Number.MIN_VALUE; //5e-324

console.log(x);
