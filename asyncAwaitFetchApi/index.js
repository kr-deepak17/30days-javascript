// async function getData(){
//     setTimeout(function(){
//         console.log("hello i am inside set timeout block")
//     },1000);
// }
// let output = getData(); // output is a type of promise 


async function getData(){
    // get request ->async
    let response= await fetch('https://jsonplaceholder.typicode.com/comments');
    let data =  await response.json();
    console.log(data);
}

getData(); 

// scenario
// prepare url/api endpoint->sycn
// await ->fetch data->async
// process data ->sync