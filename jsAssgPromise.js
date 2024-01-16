// Do promises via the official documents 
// Insert the operation
// Handle using then, catch
// Handle using await
// Handle using finally


                                            //                 function promiseFunction(){
                                            //                     console.log("Getting started with promises.");

                                            //                     setTimeout(() => {
                                            //                         console.log("Delaying the process by 3 seconds.");
                                            //                     }, 3000);

                                            //                     setTimeout(() =>{
                                            //                         resolve([
                                            //                             {name: 'hello', email: 'hello@gmail.com'}
                                            //                         ]);
                                            //                     }, 2000);
                                            //                 }
                                                            
                                                            // promiseFunction();

                                            // resolve is not defined 

                                            

                                            function promiseFunction1(){
                                                console.log("Getting started with promises.");
                            
                                                return new Promise((resolve, reject) => {
                                                    setTimeout(() =>{
                                                        resolve([
                                                            {name: 'hello', email: 'hello@gmail.com'}
                                                        ]);
                                                    }, 2000);
                                                });
                                            }
                                            promiseFunction1();
                            
                            // using then() method
                            function promiseFunction2(){
                                console.log("Getting started with promises.");
                            
                                return new Promise((resolve, reject) => {
                                    setTimeout(() =>{
                                        resolve([
                                            {name: 'hello', email: 'hello@gmail.com'}
                                        ]);
                                    }, 2000);
                                });
                            }
                             let pm = promiseFunction2();
                             pm.then(() =>{
                                console.log("Good Login");
                             });
                            
                            // using catch() method
                            let success = false;
                            function registerId(){
                                return new Promise((resolve, reject) => {
                                    setTimeout(() =>{
                                        if(success){
                                            resolve([
                                                {username: 'hari', emai: "hari@gmail.com", password: "*******"}
                                            ]);
                                        }else{
                                            reject ("Login is rejected for your name.");
                                        }
                                    }, 4000)
                                });
                            }
                            
                            const login = registerId();
                            login.catch((error) => {
                                console.log("Error occurred...");
                            })
                            
                            
                            let successes = true;
                            function registerId1(){
                                return new Promise((resolve, reject) => {
                                    setTimeout(() =>{
                                        if(successes){
                                            reject([
                                                {username: 'hari', emai: "hari@gmail.com", password: "*******"}
                                            ]);
                                        }else{
                                            resolve("Login is rejected for your name.");
                                        }
                                    }, 4000)
                                });
                            }
                            
                            const login1 = registerId1();
                            login1.catch((accept) => {
                                console.log("Acceptance occurred...");
                            })
                            
                            // finally() method
                            function finallyPromise(){
                                const message = console.log("message linked");
                                const x = 9;
                                try{
                                    if(x == "") throw "Empty";
                                    if(x > 10) throw "Too high"
                                }catch(err){
                                    console.log("unidentified");
                                }
                                finally{
                                    console.log(x);
                                }
                            }
                            finallyPromise();
                            
                            // async/await
                            async function Data() {
                                setTimeout(() => {
                                    console.log("There is the info...");
                                    console.log("https://www.pinterest.com/");
                                }, 2000);
                            }
                            
                            async function myData(){
                                try{
                                    let wait = await Data(p);
                                    console.log(`Delay processing...${ wait}`);
                                }catch(error){
                                    console.log("error...");
                                }
                            }
                            
                            myData();
                            
                            