let x;

let d = new Date();

x = d.toString();
x = d.toDateString(); //Fri Feb 24 2023
x = d.valueOf(); //1677273183767
x = d.getFullYear(); //2023
x = d.getMonth(); //1 -> February
x = d.getMonth() + 1; //2
x = d.getHours(); //22
x = d.getMinutes(); //15
x = d.getSeconds(); //20
x = d.getMilliseconds(); //933
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; //2023-2-24

x = Intl.DateTimeFormat('en-US').format(d); //2/24/2023
x = Intl.DateTimeFormat('en-GB').format(d); //24/02/2023
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); //February

x = d.toLocaleString('default', { month: 'short' }); // Feb

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Europe/Berlin',
}); //Friday, 24 February 2023 at 22:22:39

console.log(x);
