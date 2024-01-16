//javascript is single thread language

function delay1(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
 
         resolve("delay 1")
     },5000)
    console.log("cold cold cold");
 })}
 
 function delay2(){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
          resolve("delay 2")
      },5000)
     
  })}
 
  function delay3(){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
          resolve("delay 3")
      },5000)
     
  })}
  
  function delay4(){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
          resolve("delay 4")
      },5000)
     
  })}
  
  function delay5(){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
  
          resolve("delay 5")
      },5000)
     
     
  })}
 
 
 //  async function getdata(){
 //  let f1 = await delay1();
 //  console.log(f1);
 // let f2 = await delay2();
 // console.log(f2);
 // let f3 = await delay3();
 // console.log(f3);
 // let f4 = await delay4();
 // console.log(f4);
 // let f5 = await delay5();
 // console.log(f5);
 
 
 // let promise=[];
 // Promise.push(delay1());
 // Promise.push(delay2());
 // Promise.push(delay3());
 // Promise.push(delay4());
 // Promise.push(delay5());
  
 
 // let res = Promise.all([
 //     delay1(),
 //     delay2(),
 //     delay3(),
 //     delay4(),
 //     delay5(),
 // ]);
 // console.log(data)
 
 //  getdata();
 
 //1. now using then it executes parallely, not wait 
 
 // delay1().then(function(data){
 //     console.log(data)
 // })
 
 // delay2().then(function(data){
 //     console.log(data)
 // })
 
 // delay3().then(function(data){
 //     console.log(data)
 // })
 
 // delay4().then(function(data){
 //     console.log(data)
 // })
 
 // delay5().then(function(data){
 //     console.log(data)
 // })
 
 
 //3.  //using then
 //  delay1().then(function(result){
 //     console.log(result)
 
 //     delay2().then(function(result){
 //         console.log(result)
 
 //         delay3().then(function(result){
 //             console.log(result)
 
 //             delay4().then(function(result){
 //                 console.log(result)
 
 //                 delay5().then(function(result){
 //                     console.log(result)
 //                  })
 //              })
 //          })
 //      })
 //  })
 
 //use capital in first word while using constructor
 function Student(name,age){
     this.name = name;
     this.age = age;
 
     this.getName = function(){
         return this.name
     }
     // this.getAge = function(){
     //     return this.age
     // }
     Student.prototype.getAge = function(){
         return this.age
     }
 
 }
  let person1 = new Student('Ashika',20);
  let person2 = new Student('Ayusha',16);
  let person3 = new Student('Arvika',10);
 
  console.log(person1.getName());
  console.log(person1.getAge());