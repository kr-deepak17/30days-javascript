//  class human{ 
//     age=13;
//     wt=50;
//     #ht=180; //private bn gya hai
//     constructor(newage,newht){
//         this.age = newage;
//         this.#ht=newht;
//     }
//     walking(){
//         console.log("i am walking",this.#ht); // for private acess in class
//     }
//     get fetchWeight(){
//     return this.#ht;
//     } 
//     set modifyinght(val){
//         this.#ht=val;
//     }

//  };

// let obj = new human();
// obj.walking();  
// console.log(obj.age);
// obj.modifyinght=190;
// console.log(obj.fetchWeight);


// // console.log(obj.#ht);   //error 
 
// // to acess private field things outside class;
// //use getter and setter


// // constructor
// let obj2=new human(80,200);
// console.log(obj2.fetchWeight);


// default parameter
// function printName(myname="Banta"){
//     console.log(myname);
//     return;
// }
// printName();

// function printName(myname=[1,2,3,4]){
//     console.log(myname);
//     return;
// }
//function can be set as fault paramter it will call and function return 
//some value that will be set as default value

// printName();





function printthing(value="mein hu"){
    console.log(value);
    return ;
}
printthing(null);// ismien null print hoga
printthing(undefined); //ismein deafult vala






