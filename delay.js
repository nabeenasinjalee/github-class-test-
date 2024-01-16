function delay(){
    console.log("I am delayed,");
    let promise = new Promise((resolve , reject) =>{
        setTimeout(() => {
            // console.log("I am very late.");
            // resolve();
            resolve("I am resolved");
        }, 3000);
})
return promise;
}

function fast(){
    console.log("I am fast.");
}

// Using await
async function run(){
    const response = await delay();
    console.log(response);
    fast();
}

// fast();
run();


// using then
let response = delay().then((response) => {
    console.log(response);
});
console.log(response);
fast();