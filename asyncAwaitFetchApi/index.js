// async function getData(){
//     setTimeout(function(){
//         console.log("hello i am inside set timeout block")
//     },1000);
// }
// let output = getData(); // output is a type of promise 




// get req using fetch api
async function getData(){
    // get request ->async
    let response= await fetch('https://jsonplaceholder.typicode.com/comments');
    let data =  await response.json();
    console.log(data);
}

// getData(); 

// scenario
// prepare url/api endpoint->sycn
// await ->fetch data->async
// process data ->sync


// post req using fetch api
const myHeaders= new Headers();
myHeaders.append("content-Type","application/json");
const url ="https://jsonplaceholder.typicode.com/posts";
const options={
    method:"POST",
    body: JSON.stringify({username:"deepak kumar"}),
        headers: myHeaders,  
};
// async function postData() {
//     try {
//         const response = await fetch(url, options);
//         console.log("Status:", response.status);
//         const data = await response.text();
//         console.log("RAW DATA:", data);
//     }
//     catch (error) {
//         console.log("ERROR:", error);
//     }
// }

async function postData(){
    const response=await fetch(url,options);
    const data = await response.json();
    console.log("RAW DATA: ",data);

}

async function checkPost(){ 
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/101");
    const data = await response.json();
    console.log("my inserted data is here: ",data);

}
postData();
getData();
checkPost();

 