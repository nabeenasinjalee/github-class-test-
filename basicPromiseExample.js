function load(url){
    return new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(this.readyState ===4 && this.status == 200){
                resolve(this.response);
            }else{
                reject(this.status);
            }
        };
        request.open("GET", url, true);
        request.send();
    });
}

const url = "https://www.javascripttutorial.net/sample/promise/api.json";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.addEventListener('click', () =>{
    load(URL)
    .then((response)=> {
        const result = JSON.parse(response);
        msg.innerHTML = result.message;
    });
    .catch((error) =>{
        msg.innerHTML= `Error getting the message, HTTP status: ${error}`;
    });
});

// HOw it works 
// first define load() that users XMLHttpRequest object 
function load(url) {
    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.status);
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }
//   in executor we call resolve() with response 
// otherwise we reject() 

// register button click event listener and call the then() method
// if load, show message returneds
// else show the error message
