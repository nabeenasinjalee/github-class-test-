
const axios = require('axios')//Make a request for a user

    function exampleAsyncFunction() {
    console.log("Hey Iam async function");
     let response = axios.get('https://pu.edu.np/')
     .then(function(response){
        console.log("Waiting Waiting Waiting....")
     })
    }

     // Function to set a time delay using setTimeout

        async function setTimeDelay(){
            console.log("Iam delaying with 5 seconds.");
             const promise = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                console.log("Iam delayed too");
                resolve("Iam resolved");
            },5000);//adjust the delay time
         });
        }
        // Function to simulate a fast operation
        
        function fast() {
            console.log("I am fast");
        }

        // Async function to run the delayed operation
        async function run() {
            try {
                let result = await delay();
                console.log(result);
                fast();
            } catch (err) {
                console.error("Error:", err);
        }

        console.log("End of the program");
        }

  // Call the run function
    // run();
   
    // }
    
    // .catch(function(error) {
    //     console.error("Error fetching data:", error.message);
    // });


// Call the function to fetch data
// fetchData();
exampleAsyncFunction();
setTimeDelay();
fast();
run();
        
    
    
    const add = (x, y) => x + y;
         let result = 0;
    
    try
     {
        result = add(10, 20);
        } catch (c) {
          console.log(c.message);
        } finally {
          console.log({ result });
        }