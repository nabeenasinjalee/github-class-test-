// Nulling Coalescing Operator in JavaScript 
// it works only in case of 'undefined' and 'null'
console.log('Nullish Coalescing Operator...');
var g = 2;
// var h = null ?? console.log("This is not allowed.");
// here the string is already assigned and console.log was stored which do not store value

// for "This is not allowed" only, the string is being stored
var h = null ?? "This is not allowed.";
// console.log(g);
console.log(h);

var i = console.log('hello');
var i = "hi";
console.log(i);






// Conditional Rendering using coalescing operator and ternary operators 
