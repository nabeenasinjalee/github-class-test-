// Function in JS - general function  
function display(){
    console.log("I am general function/ normal function.");
}

display();


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