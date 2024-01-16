// JavaScript Arrays 
//Array declaration
console.log(" JAVASCRIPT ARRAYS:");
let points = new Array(3); //declaring arrays //object 
console.log("Length of array points: " +points.length);
points[0] = 23; //indexed array
points[1] = 233;
points[2] = 44;
points[3] = 55;
console.log(points[0]);
console.log(points[3]);
console.log("Length of new array points:", points.length);



let numbers = new Array(5,6,7,8); //array declaration and definition //array length based on the count of elements  = 3
console.log("\nLength of array numbers: ", numbers.length);
console.log(numbers);
console.log(numbers[3]);
console.log(numbers[1]);
console.log(numbers[4]);
numbers[4] = 55;
console.log(numbers[4]);



let vehicles = ['bus', 'car', 'scorpio', 8];
console.log("Length of vehicles array: ", vehicles.length);
console.log(vehicles[3]);
console.log(vehicles);
console.log(vehicles[2]);
vehicles[3] = "";
console.log(vehicles[3]);
vehicles[3] = 4;
console.log(vehicles[3]);
console.log("Length of vehicles array: ", vehicles.length);


var result = numbers.map((number) => number*4);
console.log("\n\nUpdated array: ",result);
console.log("Original array: ",numbers);
// arrays works in both for-in and for-of since we pass objects in array
// but for objects, only for-in is applicable

// JavaScript Objects 
// Everything in JS are objects 
console.log("\nJAVASCRIPT OBJECTS:");

var student = {
    name: "Ram",
    age : 13, 
    address: "Lalitpur",
    'full name': "Ram Bahadur Khatri",
    info: function(){
        return this.name+ "   " +this.address;
    }
};
console.log(student.name);
console.log(student.age, student.address);
console.log(student["full name"]);
console.log(student['full name']);
console.log(student['address']);
console.log(student.info());

// console.log(student[1]);
// console.log(info);
// console.log(student.info);

// we can insert function inside object 

for(let b in student){
    console.log(b);
    console.log(student[b]);
}

var student_info = [
    student1={
        name: "Ashika",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 3
    },
    student2={
        name: "Sima",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 30
    },
    student3={
        name: "Samima",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 32
    },
    student4={
        name: "Nabina",
        address: "Baneshwor",
        faculty: "IT",
        semester: 'IV',
        'roll no': 23
    },
    student5={
        name: "Sambhavi",
        address: "Kalanki",
        faculty: "Computer",
        semester: 'V',
        'roll no': 34
    },
    student6={
        name :"Praju",
        address: "Ekantakuna",
        faculty: "Computer",
        semester: 'V',
        'roll no': 22
    }
];
console.log(student_info);
console.log("\n\n",student_info.length);


//Adding an element to the end of an array
student_info.push(
    student7 = {
        ame :"Amir",
        address: "Ekantakuna",
        faculty: "IT",
        semester: 'VII',
        'roll no': 2
    }
);
console.log(student_info);
console.log("\n\n",student_info.length);

//Adding an element to the beginning of an array 
student_info.unshift(
    student7 = {
        ame :"Aadarsh",
        address: "Ekantakuna",
        faculty: "IT",
        semester: 'IV',
        'roll no': 4
    }
);
console.log(student_info);
console.log("\n\n",student_info.length);


// Removing the elements from the end of an arrya
const lastStudent = student_info.pop();
console.log(student_info);
console.log("\n\n",student_info.length);

// Removing the elements from the end of an arrya
const firstStudent = student_info.shift();
console.log(student_info);
console.log("\n\n",student_info.length);


console.log(student_info);
for(let b in student_info){
    console.log(student_info[b]);
}

// for(let a of student_info){
//     console.log(student_info[a]);
// }

for(let b in student_info){
    console.log(student_info[b].name);
}
for(let b in student_info){
    console.log(student_info[b].address);
}
for(let b in student_info){
    console.log(student_info[b].faculty);
}
for(let b in student_info){
    console.log(student_info[b].semester);
}
// for(let b in student_info){
//     // console.log(student_info[b].['roll no']);
// }

for(let b in student_info){
    console.log("\n\nStudent Information: ");
    console.log("Name:\t\t",student_info[b].name);
    console.log("Address:\t",student_info[b].address);
    console.log("Faculty:\t",student_info[b].faculty);
    console.log("Semester:\t",student_info[b].semester);
}


var student_info = [
    {
        name: "Ashika",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 3
    },
    {
        name: "Sima",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 30
    },
    {
        name: "Samima",
        address: "Sanepa",
        faculty: "IT",
        semester: 'IV',
        'roll no': 32
    },
    {
        name: "Nabina",
        address: "Baneshwor",
        faculty: "IT",
        semester: 'IV',
        'roll no': 23
    },
    {
        name: "Sambhavi",
        address: "Kalanki",
        faculty: "Computer",
        semester: 'V',
        'roll no': 34
    },
        {
        name :"Praju",
        address: "Ekantakuna",
        faculty: "Computer",
        semester: 'V',
        'roll no': 22
    }
];

for(let b in student_info){
    console.log("Name:\t",student_info[b].name);
}
for(let b in student_info){
    console.log("Address:\t",student_info[b].address);
}
for(let b in student_info){
    console.log("Faculty:\t",student_info[b].faculty);
}
for(let b in student_info){
    console.log("Semester:\t",student_info[b].semester);
}

console.log("\n\nStudent Information: ");
console.log(student_info[0].name);
