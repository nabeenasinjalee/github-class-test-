// await keyword
    // wait for promsie to settle either in resolved state or rejected state
    // only inside async function
    async function display(){
        let result = await sayHi();
        console.log(result);
    }
    // await instruct JS engine to wait for sayHi() to wait to completer before displaying the message 
    // if await outside asynce, will get an error


