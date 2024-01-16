// Error Handling
    // promise resolves, await promise returns the result 
    // when rejected, await promise throw an error as it there were a throw statement

    async function gerUser(userId){
        await Promise.reject(new Error("invalid user id"));
    }

    // same as
    async function getUser(usrId){
        throw new Error("invalid user id");
    }

    // in real scenario, it take a while for a promsied to throw an error
    // catch the error by "try...catch" statement, same way as regular throw statemetn

    async function getUser(userid){
        try{
            const suer = await Promise.reject(new Error ("Invalid user Id"));
        }catch(error){
            console.log(error);
        }
    }

    // it's possible to catch errors caused by one or more wait promises's
    async function showServiceCost() {
        try {
           let user = await getUser(100);
           let services = await getServices(user);
           let cost = await getServiceCost(services);
           console.log(`The service cost is ${cost}`);
        } catch(error) {
           console.log(error);
        }
    }
    getUser();
    showServiceCost();