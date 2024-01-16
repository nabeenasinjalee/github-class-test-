// 3. finally() method
//  - somethimes to execute same piece of code whether the promsie is fulfilled or rejected 

// Example:
const render = () => {
    //
}
getUsers()
.then((users)=>{
    console.log(users);
    render();
})
.catch((error)=>{
    console.log(error);
    render();
});

// here render() is dublicated in both then() and catch() methods 
// to remove teh duplicated and execute render() whether promsie is fulfilled or rejected, we use finally() method
const rendered= () =>{
//
}
getUsers()
.then((users)=>{
console.log(users);
})
.catch((error)=>{
console.log(error);
})
.finally(() =>{
rendered();
});