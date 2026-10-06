// let name = "ashok";
// function outerFunction(){
//     let name ="deepak kumar";
//     function innerFunction(){
//         let name ="banta"
//         console.log(name);
//     }
//     innerFunction();
// }
// outerFunction();



// concept of closures

function outerFunction(){
    let name ="deepak kumar";
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
 let inner =outerFunction();
 inner();



