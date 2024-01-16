// Call-back Function 
// millisecond representation

// This function is calling itself after 2 second interval 
// Fucntion calling itself- callback function 
// Working in time-event

// Using arrow function 
setTimeout(() => {
    console.log('all good');
}, 2000);


// Using general function 
setTimeout(welcome , 5000);
    function welcome(){
        console.log("Hello welcome.");
}

//Using Anonymous function
setTimeout(function(){
    console.log("I am anonymous fucntion.");
}, 4000);


