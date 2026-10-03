// // function changeText(){
// //     element=document.getElementById('fpara');
// //     fpara.textContent='mein hu deepak'
// // }
// // fpara=document.getElementById('fpara');
// // fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText);

// ///// event object
// function changeText(event){
//     console.log(event); // will print 'click';
//     element=document.getElementById('fpara');
//     fpara.textContent='mein hu deepak'
// }
// fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);


// Default action;
//  let anchorelement=document.getElementById('fanchor');
//  function DefaultAction(event){
//     event.preventDefault(); // to remove default action
//     anchorelement.textContent='done scene hai bhai'
//  }
//  anchorelement.addEventListener('click',DefaultAction);

//// avoiding too many listeners

// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',function sendAlert(){
//         alert("you have clicked in para"+(i+1));
//     })
// }
// uper vala is not good sabke liye alg alga banane pd rha hai

// better >>>
// function alertPara(event){
//     console.log(event);
//     alert("you have clicked on "+event.target.textContent); // event.target se target fetch hoga 
// }
// for(let i =0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara);
// }



/// div pe hi lga do

// function divAlert(event){
//     alert("you have clicked on "+event.target.textContent);
// }

// let mydiv = document.getElementById('wrapper');
// mydiv.addEventListener('click',divAlert);



// conditional target use as NODENAME;

function sendAlert(event){
    if(event.target.nodeName=='SPAN'){ // only alert for span tag
        alert("you have clicked on "+ event.target.textContent);
    }

}

let element=document.getElementById('wrapper');
element.addEventListener('click',sendAlert);