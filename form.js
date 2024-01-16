// For a component to be event, an action need to be performed
// Event handling: mechanism of event : 
// click(submit) button: event, taking data from event and submission: process/ event handling
// There are at least 120 events on JS

function formData(){
    // e.preventDefault();
    // console.log("Clicking the button...");
    // var full_name = document.getElementById('fullName').id;
    
    
    var full_name = document.getElementById('fullName');
    document.getElementById('f_info').innerHTML = "Hello...";
    // var f_msg = document.getElementById('f_info');
    // f_msg.innerHTML = "Hello";



    // f_msg.innerText = "Hello";
    // console.log(full_name);

    var email = document.getElementById('email_id').value;
    // var email = document.getElementById('email_id').placeholder;
    // var e_msg = document.getElementById('e_info');
    // e_msg.innerText = "Hi";
    document.getElementById('e_info').innerHTML = "Hello...";

    console.log(email);

    var password = document.getElementById('pass').value;
    var p_msg = document.getElementById('p_info');
    p_msg.innerHTML = "Bye...";
    console.log(password);
}