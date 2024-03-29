// 2. catch() method
// - to get error only when promise state is rejected

// promise.catch(onRejected)
// it invokes then(undefined, onRejected) internally

// changing success flag to false to simulate error scenario
let success = false;
function getUsers(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(success){
                resolve([
                    {username: 'john', email:'john@test.com'},
                    {username: 'jane', email:'jane@test.com'},
                ]);
            }else{
                reject("Failed to the user list");
            }
        }, 2000);
    })
}

const promise = getUsers();
promise.catch((error) =>{
    console.log(error);
})