function delay(){
    console.log("I am delayed,");
    let promise = new Promise((resolve , reject) =>{
        setTimeout(() => {
            // console.log("I am very late.");
            // resolve();
            resolve("I am resolved");
            // reject("I am rejected.")
        }, 3000);
})
return promise;
}

function fast(){
    console.log("I am fast.");
}

async function run(){
    try{
        // Use try and catch block if you are using await
        let responsive = await delay();
        console.log(responsive);
    }catch(err){
        console.log("I am error.");
    }
}

// using then
let response = delay().then((data) => {
    // console.log(data);
    console.log("this is success.",data)
}).catch((err) => {
    // console.log(err);
    console.log("this is error.")
});
run();

console.log(response);
fast();