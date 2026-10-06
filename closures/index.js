function outerFunction(){
    let name ="deepak kumar";
    function innerFunction(){
        console.log(name);
    }
    innerFunction();
}
outerFunction();