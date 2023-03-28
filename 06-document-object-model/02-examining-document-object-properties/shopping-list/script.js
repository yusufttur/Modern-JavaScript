let output;

output = document.all; // html all collection
output = document.all[10];
output = document.all.length; // 36 items
output = document.documentElement; // html tag (head, body)
output = document.head; // head
output = document.head.children; // meta, link, title
output = document.body.children; // html collection

output = document.doctype; // <!DOCTYPE html>
output = document.characterSet; // UTF-8
output = document.contentType; // text/html
output = document.forms[0]; // form#item-form
output = document.forms[0].method; // get
output = document.forms[0].action; //

// document.forms[0].id = 'new-id'; // was <form id="item-form">
output = document.links; // HTMLCollection[]
output = document.links[0].href = 'https://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList; // DOM Token List

output = document.images; // HTMLCollection[img]
output = document.images[0]; // note.png
output = document.images[0].src;

// document.forms.forEach((form) => console.log(form)); // Uncaught TypeError: document.forms.forEach is not a function

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form)); // this works

console.log(output);
