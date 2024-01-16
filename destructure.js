                            // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                            // console.log(array[5]);

                            // let[a , ...rest] = array;
                            // console.log(a); 
                            // console.log(rest);

                            // let[p , , r] = array;
                            // console.log(p, r);

// 1 to many - rest operators


// many to one- spread operator
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10]

let combined = [...num1, ...num2];
console.log(combined);


                // function sum(...num){
                //     return num.reduce((a, b) => a +b)
                // }
                // console.log(sum(3,4,5,6,7,8,9));

// Destructuring an object 
let info = [
    person1={
    name: "Ashika",
    roll: 12
    },

    person2= {
        name: "Samima",
        roll: 33
    },
];

let address = [
    address1 ={
        location: "Kathmandu",
        postalCode: 33300
    },
    address2 = {
        location: "Baglung",
        postalCode: 44200
    }
];

// let {b , ...rem} = info;
// console.log(b);
// console.log(rem);

console.log(info[0].name);
let data = {...info,...address}; 
// console.log(data);

console.log(info[0],data[0]);
// console.log(info[0].person1);

let{name:firstName, roll} = info;
console.log(data);

let addresses ={location: "Kathmandu",postalCode: 33300};
let your_data ={name: "Ashika",roll: 12};
let your_info = {...your_data, ...addresses};
console.log(your_info);

// Nested Object 
let person = {name: "Hari", Age: 12, 
    getTotal: function(numb){
        return numb + this.Age;
    },

    location: {distrct: "Baglung", postalCode: 22300, city: "rehiehrf",
    getAddress: function(num){
        return num+this.postalCode;
    } //function within object called methods}
    }

    // getCollege: () =>{
    //     return this.name;
    // }
};
console.log(person);
console.log(person.location); 
console.log(person.location.distrct); //baglung
console.log(person.location.country); //undefined
console.log(person.location.getAddress(12)); //22312
console.log(person?.getTotal(11)); //23
// console.log(person?.getSum(11));
console.log(person.getSum?.(11)); //undefined
// console.log(person.getAddress(12)); //error getAddress is not a function 
console.log(person.getAddress?.()); //undefined

console.log(person?.country); //undefined
console.log(person.location?.country); //undefined
console.log(person?.lastName); //undefined

// console.log(person.getCollege());
