var a = 20;
console.log(a+"\n");

// General Function

function sum(){
    let b = 40;
    let c = 30;
    let sum = b + c;
    console.log(sum);
}

sum();

// Anonymous Function- does not have a name
var sum = function(){
    var p = 30;
    var q = 44;
    let sum1 = p + q;
    console.log(`\n${sum1}`);
}
sum(); //sum is variable and function itself 

// Arrow Fucntion - most used on using anonymously
var sum = ()=>{
    let i = 22;
    let j = 33;
    let sum = i + j;
    console.log("\n"+sum);
}
sum();
// used maximum to use callback funcation 
// anonymous as well


// Return Type
function Addition(r , s){
    console.log(`The sum is ${r+s}`);
    // `` backtick is called variable interpolation 
}
Addition();
Addition(3, 8);


var add = (r, s) => console.log(`The sum is ${r + s}`); 
add(5 , 93);

var addon =function(r, s){
    console.log(`The sum is ${r+s}.`);
}
addon(33, 2);

