let d;

d = new Date();
console.log(d, typeof d); // .. object

d = new Date(1988, 10, 14, 06, 30); // 10 - November

d = new Date('1988-11-14'); // 11 - November

d = new Date('11-14-1988');

d = new Date('2022-11-14');

d = Date.now(); //Timestamp

d = new Date('11-14-1988 06:30:00');

d = d.getTime(); // Timestamp for date above

d = d.valueOf(); // same with above

d = new Date(595488600000); // The date assigned above

d = Math.floor(Date.now() / 1000); // date with seconds

console.log(d);
