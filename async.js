// importing axios 2 types 
// 1. via variable declaration

const action = require('axios');

function getAsyncData(){
    console.log("Getting ekantipur data news:");

}

function getKantipur(){
    console.log("Kantipur");
    const response = action.get('https://ekantipur.com/national/2024/01/09/cooperative-operator-arrested-for-embezzling-more-than-1-billion-rupees-from-savers-48-29.html');
    console.log(response);
}
console.log("Hello");
getKantipur();
getAsyncData();

async function Hello(){
    return "Hello";
}

Hello().then(
    console.log("I am late.")
)

Hello();
