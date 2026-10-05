// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("deepak kumar");
//     // resolve(1001)
//     reject( new Error("internal server error"));

// });



// function sayMyName(){
//     console.log("my name is deepak kumar");
// }
// setTimeout(sayMyName,10000);

/// ansynchronous code 

// let firstPromise= new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("my name is deepak kumar");
//     },5000);
//     resolve(1);
// })


// then and catch

let Promise1=new Promise((resolve,reject)=>{
    let sucess=false;
    if(sucess){
        resolve("promise is fulfilled");
        
    }
    else{
        reject("promise is rejected");
    }
});
// Promise1.then((message)=>{
//     console.log("mein then ka message hu. "+message);
// }).catch((error)=>{
//     console.log("error: "+error);

// });


/// promise chaining;

// Promise1.then((message)=>{
//     console.log("i am message 1."+message);
//     return "promise fullfilled second message";
// }).then((message)=>{
//     console.log("i am message 2."+message);
//     return "promise fullfilles thied message";
// }).then((message)=>{
//     console.log("i am message 3."+message);
// }).catch((error)=>{
//     console.log("server error."+error);
// }).finally((message)=>{
//     console.log("hello i am finally mein to run krunga hi")
// })


// multiple promises

let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");

})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");

})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"third");

})

Promise.all([promise2,promise1,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("hello ji yha to error aa rhi hai."+error);
})

