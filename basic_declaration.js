// var, let and const
console.log('Using var declaration.')
let e;
var a = 20;
var a = 30;
var a = 40;
console.log(a);

// variable using 'let' does not allow to redelclare 
// let b = 1;
// but allow the updated value 
console.log('Variable declaration using let');
let d;
let b = 50;
console.log(b);


//Using const 
// Do not allow the declaration without values 
console.log('Variable declaration using const.');
// const c;
const c = 30;
console.log(c);



const j = 30;
// p = 33;
console.log(j);

// Both const and let are block scope 
// var is functional scope 








// var, let, and const keywords
// global and functional scopes are similar
console.log('Var Keyword...');
var x =30;
var x = 50;
// using var, can re-define variable 
console.log(x);
x = 40;
// can re-assign variable value
console.log(x);

function display(){
    if(true){
        var y = 99;  // y is defined in a block
        console.log(y);
    }
    console.log(y);
    console.log(x);
}

// console.log(y); this is not applicable/ not allowed 
// outside function it does not identify y 
// x is global so identify the variable 
display();



console.log("\n\nNow let keyword...");
// let p; allowed 
// p = 33;
let p = 100;
console.log(p);
// let p = 400; 
// once declared using 'let', it cannot be redeclared the same variable
p= 400;
p = 300;
console.log(p);
// allow to  re-assign the value  
// let is a block scope
function show(){
    if(true){
        let r = 500;
        console.log(r);
    }
    // console.log(r); 
    // do not allow, because 'let' is block scope
    // So block scope 

    if(true){
        let r;
        r = 600;
        console.log(r);
    }
    
}
show();



console.log('\n\nVariable declaration using "const" keyword...');
// const a;
// not allowed to decalre only
//must be initialized variable beforehand 
const a = 33;
// const a = 89; not allowed; re-declaration not allowed 
// a = 44; re-assign is not allowed 
console.log(a);

function visible(){
    if(true){
        let q = 30;
        console.log(q);
    }
    // console.log(q); 
    // outside block, not identified 
    // const is a block-scoped, using variable with const keyword not allowed to access from outside of the block
    if(true){
        let q = 44;
        console.log(q);
    }
}
visible();


function Counter() {
    this.count = 0;
    let self = this;
    return {
        increase: function () {
            self.count++;
        },
        current: function () {
            return self.count;
        },
        reset: function () {
            self.count = 0;
        }
    }
}

var counter = new Counter();
var numbers = [1, 2, 3];
var sum = 0;
numbers.forEach(function (e) {
    sum += e;
    this.increase();
}, counter);

console.log(sum); // 6
console.log(counter.current()); // 3

