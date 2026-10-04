
const time1=performance.now();
for(let i =1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent="this is para"+i;
    document.body.appendChild(para);
}
const time2=performance.now();
console.log("time to run all para is "+(time2-time1));


// code2

let time2_1=performance.now();
let mydiv= document.createElement('div');
for(let i =1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent="this is para "+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let time2_2=performance.now();
console.log("time to run code2 is "+(time2_2-time2_1));

// code 1 has 100 reflow and 100 repaints while code2 takes 1 reflow and 1 repaints;

// best code is using document fragements;
 
const time3_1=performance.now();
let fragment= document.createDocumentFragment();
for(let i =1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent="this is para "+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const time3_2=performance.now();
console.log("time to run code2 is "+(time3_2-time3_1));

// code 3 also take 1 reflow and 1 repaint;
//code 3 is best