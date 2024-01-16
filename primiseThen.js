// Do promises via the official documents 
// Insert the operation
// Handle using then, catch
// Handle using await
// Handle using finally

// Using callback function(classical approach) to deal with asynchronous operation 
// It works well but difficult to follow but add more complexity 
// more number of functions cause callback hell problem
// Promises solve this problem 

// Promises 
// - object to encapsulate the result of an asynchrounous operation
// -has a state of following ( pending, fulfilled with a CSSMathValue, rejected for a reason)
// (pending: indicates the progress of the operation)
// (depending upon the states : it's either fulfilled or rejected)
// (fulfilled: asynchronous operation was completed successfully)
// (rejected: asynchronous operation failed )

// Creating a Promise() constructor - to create object
// const promise = new Promise((resolve, reject) => {
//     if(success){
//         resolve(value);
//     }else{
//         reject(error);
//     }
// });

// Promise constructor accepts callaback function which typically performs asynchrounous operation
//function Often referred as executors
// Executor accepts two callback functions: resolve and reject
// If operation completes successfully: call resolve() to change the state from pending to fulfilled
// If failed/error calls reject() and change state form pending to rejected with error reason
// once reaches the final state, remains at that state and con't go to another state
// i.e, fulfilled state to rejected and vice versal is not possible
// i.e, fulfilled or rejected to pending is also not possible
// once Promise object is created, its stawed is pending 
// once reached either fulfilled or rejected, it resolved
// (NOTE: we rarely create promise objects in practice, instead will consume promises provided by libraries)

// Consuming a Promise: then, catch, finally 

// 1. then() method 
    // - to get value of promise when it's fulfilled 
    // -syntax: promise.then(onFulfilled, onRejected);
    // -accepts two callback functions: onFulfilled and onRejected 
    // -onFulfilled() with value and onRejected() with an error
    // NOTE: both onFulfilled() ajd onRejeceted() arguments are optional

    // Example:
    function getUsers(){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve([
                    {username: "john", email: 'john@test.com'},
                    {username: 'jane', email: 'jane@test.com'},
                ]);
            }, 1000);
        });
    }

    function onFulfilled(users){
        console.log(users);
    }
    
    const promises = getUsers();
    promises.then(onFulfilled);

    // onFullied(), when promise fulfilled
    // getUsers(), to get a promise object
    // then(), of the promise object and output the user list to the console
    // to make code more conscise use arrow function

    function getUsers(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve([
                    {username: 'john', email: 'john@test.com'},
                    {username: 'jane', email: 'jane@test.com'},
                ]);
            }, 1000);
        });
    }
    const promise = getUsers();
    promise.then((users) =>{
        console.log(users);
    });

    // since getUsers() function returns a promise object, we can chain the function call with then() method

    // to simulate error, we can use succss flag
    let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promisee = getUsers();
promisee.then(onFulfilled, onRejected);
// working
// define success variable and initialize true values
// if success(true), getUsers() is fulfilled
// otherwise rejected
// define onFulfilled and onRejected
// get promise from getUsers() and call then() method with onFulfilled and onRejected
// arrow functions as arguments
// getUsers() function
// ...

const promis = getUsers();
promis.then(
  (users) => console.log,
  (error) => console.log
);