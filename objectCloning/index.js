let src={
    age :15,wt:58,ht:180
};
src.colour ="orange" // objects are dynamic in nature anything can be inserted on run time
console.log(src);
let src2={
    rollno :93,
    name :"Deepak kumar",

};

// object cloning using spread operator
let dest =src;// making shallow ,ref of src and dest is same
let dest2={...src}; // making deep copy ref is diffrent
src.age=40;
console.log(dest,"age is changed as ref was same");
console.log(dest2,"age is not changes because ref was diffrent");

// using assign 
let dest3=Object.assign({},src,src2);//cloning multiple objects
console.log(dest3);

// using iteration
let src3={
    age:21,
    name:"Deepak kumar",
    gf:"NO"

}
let dest4={};
for(let key in src3){
    let newKey=key;
    let newValue =src3[key];
    dest4[newKey]=newValue;
}
console.log(dest4);

