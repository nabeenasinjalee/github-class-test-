// console.log("Hello World!");
// console.log("Hello, How are you doing?");
// console.log("May I know your name please?");
// console.log("I am fine and it's Iraya.");

// Basic variable declaration, operations, datatypes

// VARIABLE DECLARATION  var(even before ecma 6)
// JS works on both DOM(Document Object Model) and BOM(Browser Object Model) so not specify the data type 
// Primitive as number(integer, float) and string(character)
// Everything is string in JS (Both string and number are object in JS)
var a = 20;
console.log(a);

var b = 3.45;
console.log(b);

var c  = "Hello Hi";
console.log(c);

var d = 'c';
console.log(d);

var e = "c";
console.log(e);

var f = 'why?';
console.log(f);

var g = 10;
var h = 20;
console.log(g+h);

var i = "I am ";
var j = "fine.";
console.log(i+j);

var k = 22;
var l = "21";
console.log(k+l);

var m = 12;
var n = 12;
console.log("The sum of two numbers is:" +m+n);
console.log("The sum of two numbers is:" +(m+n));
console.log("The sum of two numbers is:" +(m+n)+".\tThis is okay.");
console.log(`The sum of two numbers is: ${m+n}. \tThis is okay`);
// What is the name of method of using back-tick `` in JS?

function display(a,b){
    console.log("I am general function/ normal function.  "+(a+b));
}
// no. of arguments doesn't matter 
display(3 , 1, 8);



function display(a,b= 80){
    console.log("I am general function/ normal function.  "+(a+b));
}
// no. of arguments doesn't matter 
display(3);



// return type 
function display(a, b=80){
    return a+b;
}
var sum = display(6);
console.log(sum);
console.log(`Sum value is ${sum}.`);


function display(a, b=80){
    return a+b;
}
var sum = display(8,'h');
console.log(sum);
console.log(`Sum value is ${sum}.`);



function displaysum(a, b=80){
    return a-b;
}
var sum = displaysum(8,'h');
console.log(sum);
console.log(`Sum value is ${sum}.`);
// NaN (not a number), undefined and NULL are variable values 

function displaysum(a, b=80){
    return a-b;
}
var sum = displaysum(8,'9');
console.log(sum);
console.log(`Sum value is ${sum}.`);

// value1 ?? value2 
// const result = value1;
// if(result ==null || result === undefined){
//     result = value2;
// }

const name = null ?? 'John';
console.log(name);


const age = undefined ?? 29;
console.log(age);

let count;
let result = count || 1;
console.log(result);

let count1 = 0;
let res =count1 || 1;
console.log(res);
// result 1 not 0
//nullish coalescing operator helps to avoid this pitfall
// returns the second value when the first one is either null of undefined    

