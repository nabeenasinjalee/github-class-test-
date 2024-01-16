// console.log(name);
// var name = "Hello World!";
// undefined

// var name;
//  console.log(name);
// name = "Hello World!"; //undefined


                    // var name;
                    // console.log(name); //undefined
                    // console.log(name = "Hello World!"); //Hello World!

                    // let names;
                    // console.log(names);
                    // console.log(names = "jevin");

                    // let name1; //name has alreadu been declared
                    // console.log(name1); //undefined
                    // console.log(name1 = "Hello World!");

// let name;
// name = "Hari";
// console.log(name);

// let name;
// console.log(name = "hari");

// const namee; //missing initializer in const declaration
// console.log(namee = "kevin");

            // const n = "kev";
            // console.log(n);

// dead-zone: reference error, has no reference 


// Closure
                // function hello(){
                //     let n = 4;
                //     function getName(){
                //         console.log("Write your name.");
                //         console.log(n);
                //     }
                //     getName();
                // }
                // // getName();
                // hello();
                // // getName();


// Closure:
// inner function can access their outer function but reverse is not possible

                // function HI(){
                //     let n = 5;
                //     function Bye(){
                //         console.log("See you soon.");
                //     }
                //     // HI();
                //     Bye();
                // }
                // // Bye();
                // HI();



// function and block scope
                // function getInfo(){
                //     let y_name; //function level scope
                //     console.log(y_name);
                //     y_name = "i am ...";
                //     console.log(y_name);
                // }
                // getInfo();

                // let your_name = "ram";
                // if(your_name == "hari"){ //block level scope
                //     console.log(true);
                // }else{
                //     console.log("no name found...");
                // }

// Event loop
// there is a constant loops of event going in JS
// if both callback queue and callback stack is empty, then the JS program end

// JS fetch()
// axios to fetch api's
// fetch('url');
        // // fetch is an inbuilt function 
        // function fetchData(){
        //     fetch('https://www.javascripttutorial.net/web-apis/javascript-fetch-api/').then(function(){
        //         console.log(Response);
        //     });
        //     // console.log(fetch());
        // }
        // fetchData();

// output:
// [class Response] {
//   error: [Function: error],
//   json: [Function: json],
//   redirect: [Function: redirect]
// }


// fetch('https://www.javascripttutorial.net/web-apis/javascript-fetch-api/').then(function(){
//         console.log(Response);
//     });


// fetch('https://pouexam.edu.np/')
// .then(response => response.url());
// .then(data => console.log(response));





// async function fetchText(){
//     let response = await fetch("https://pouexam.edu.np/");

//     console.log(response.status);
//     console.log(status.statusText);

//     if(response.status === 200){
//         let data = await response.url();
//     }
// }
// fetchText();


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

// task response lai different variable ma extract garne 
// for each


//   {
//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//     images: [
//       'https://cdn.dummyjson.com/product-images/1/1.jpg',
//       'https://cdn.dummyjson.com/product-images/1/2.jpg',
//       'https://cdn.dummyjson.com/product-images/1/3.jpg',
//       'https://cdn.dummyjson.com/product-images/1/4.jpg',
//       'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
//     ]
//   }

function Counting(){
    this.count = 0;
    let self = this;
    return{
        increase: function(){
            self.count++;
        },
        current: function(){
            return self.count;
        },
        reset: function(){
            self.count = 0;
        }
    }
}

let count_num = new Counting();
let data={
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    images: [
      'https://cdn.dummyjson.com/product-images/1/1.jpg',
      'https://cdn.dummyjson.com/product-images/1/2.jpg',
      'https://cdn.dummyjson.com/product-images/1/3.jpg',
      'https://cdn.dummyjson.com/product-images/1/4.jpg',
      'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
]};



function Counter(){
    this.count = 0;
    let self = this;
    return{
        increase: function(){
            self.count++;
        },
        current: function(){
            return self.count;
        },
        reset: function(){
            self.count = 0;
        }
    }
}

let idata = new Array();
idata[0] = {id : 1};
idata[1] = {title: 'iPhone 9'};
idata[2] = {description: 'An apple mobile which is nothing like apple'};
idata[3] = {price: 549};
idata[4] = {discountPercentage: 12.96};
idata[5] = { rating: 4.69};
idata[6] = {stock: 94};
idata[7] = {brand: 'Apple'};
idata[8] = { category: 'smartphones'};
idata[9] = {thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'};
idata[10] = {image1: 'https://cdn.dummyjson.com/product-images/1/1.jpg'};
idata[11] = {image2: 'https://cdn.dummyjson.com/product-images/1/2.jpg'};
idata[12] = {image3: 'https://cdn.dummyjson.com/product-images/1/3.jpg'};
idata[13] = {image4: 'https://cdn.dummyjson.com/product-images/1/4.jpg'};
idata[14] = {image5: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'};

var counter = new Counter();
idata.forEach(function (e) {
    this.increase();
    console.log(idata);
}, counter);

console.log(counter.current()); 
// console.log(idata);

