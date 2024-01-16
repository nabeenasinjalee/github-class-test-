// Async and Await

// basic 3 tasks that use setTimeOut() to simulate asynchronous operation
function getUser(userId, callback) {
    console.log('Get user from the database.');
    setTimeout(() => {
        callback({
            userId: userId,
            username: 'john'
        });
    }, 1000);
}

function getServices(user, callback) {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
        callback(['Email', 'VPN', 'CDN']);
    }, 2 * 1000);
}

function getServiceCost(services, callback) {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
        callback(services.length * 100);
    }, 3 * 1000);
}

// nested callback function
getUser(100, (user) => {
    getServices(user, (services) => {
        getServiceCost(services, (cost) => {
            console.log(`The service cost is ${cost}`);
        });
    });
});
// to avoid this callback hell issues, ES6 introuduce promises that allows to write asynchronous code in more manageable ways
// 1st we need to return a Promsie in each function

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

// then you chain the promises 
getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);


// ES2017 introduced async/await keywords that build on top of promises
// allows to write asynchronous code in more synchronous and readable
// syntatic (async/await) sugar for promises

// if a function returns promsies, we can place await keywrod in front of the function call 
// like let result = await f();
// await will wait for promsie to be returned f() and can only be used inside async


// async() function 
async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showServiceCost();

// async keyword
    // define a function that handles asynchronous operations
    async function sayHi(){
        return 'HI';
    }
    // since sayHi() retruns Promsie 
    sayHi().then(console.log);
    // explicitly 
    async function sayHello(){
        return Promise.resolve("Hello");
    }
    // effect is same

    // async in function expressions 
    let sayHelloHi = async function() {
        return "hi i am...";
    }

    // arrow function 
    let sayH = async() => "HiJKL";
    // methods of classes
    class Greeter{
        async sayBye(){
            return "bye";
        }
    }