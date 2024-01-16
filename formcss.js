
function formData(){

    var c = "palegreen";    //defining color in js in variable 

    var full_name = document.getElementById('fullName');
    // document.getElementById('f_info').innerHTML = "Hello...";
    // full_name.style.backgroundColor= "red";
    var f_style = full_name.style;
    f_style.fontStyle = "italic";
    f_style.backgroundColor= "brown";
    // full_name.style.fontSize = "2rem";

    var email = document.getElementById('email_id');
    // email.style.backgroundColor = "yellow";
    // email.style.fontSize = "3rem";
    // document.getElementById('e_info').innerHTML = "Hello...";

    var e_style = email.style;
    e_style.backgroundColor= "lovelypink";
    e_style.fontSize= "2rem";
    console.log(email);
    

    var password = document.getElementById('pass');
    // password.style.backgroundColor=c;
    // password.style.fontSize = "4rem";
    // var p_msg = document.getElementById('p_info');
    // p_msg.innerHTML = "Bye...";

    var p_style = password.style;
    p_style.backgroundColor="pink";
    p_style.fontWeight= "bolder";
    // p_style.transform = "transitionX"
    console.log(password);
}