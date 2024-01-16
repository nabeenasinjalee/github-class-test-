let points = new Array(3); //declaring arrays //object 
// console.log("Length of array points: " +points.length);
points[0] = 23; //indexed array
points[1] = 233;
points[2] = 44;
points[3] = 55;

let numbers = new Array(5,6,7,8); 
numbers[4] = 55;


let vehicles = ['bus', 'car', 'scorpio', 8];


for(i = 0; i< vehicles.length ; i++){
    console.log(vehicles[i]);
}


// for(const i = 0; i< vehicles.length; i++){
//     console.log(vehicles[i]); // value of i is constant 
// }

for(let a in vehicles){
    console.log(vehicles[a]); //describe the components in the given array 
}
// for(let a of vehicles){
//     console.log(a);
// }


// for(let b of vehicles){
//     console.log(vehicles[b]);
// }

for (let b of vehicles){
    console.log(b);
}

//for-of loop for array 


// map method map() - mapping
// in nodejs and reactjs - record is obtained in the form of object and stringify and then convert into json file format
// mapping garda old array lai change gardaina= do the cloning

var result = numbers.map((number)=>{
    return number*10;
});
console.log("Updated array: ",result);
console.log("Original array: ",numbers);



var result = numbers.map(function result(number){
    return number*2;
})
console.log("\n\nUpdated array: ",result);
console.log("Original array: ",numbers);



var result = numbers.map(multiplyByFive);
function multiplyByFive(number){
    return number*5;
}
console.log("\n\nUpdated array: ",result);
console.log("Original array: ",numbers);


var result = numbers.map((number) => number*4);
console.log("\n\nUpdated array: ",result);
console.log("Original array: ",numbers);


