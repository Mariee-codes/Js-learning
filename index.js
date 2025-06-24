// how to accept user input
// 1. EASY WAY = windows prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;
// username = window.prompt("whats your username");
// console.log(username);



//  document.getElementById("mySubmit").onclick = function(){
//    username = document.getElementById("myText").value;
//    document.getElementById("myH1").textContent = `Hello ${username}`
//     console.log(username);
//  }

// type conversation  = change the datatype of a value to another (strings,numbers,booleans)
// let age = window.prompt("how old are you");
// age = Number(age);
// age+=1;
// console.log(age);

// let x ="pizza";
// let y ="pizza";
// let z ="pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// javascript constants
// const = a variable that cant be changed
// let pie = 3.14159;
// let radius ;
// let circumference;

// radius = window.prompt('enter radius of a circle');
// radius = Number(radius);

// circumference = 2 * pie * radius;
// console.log(circumference);

//  const PIE =3.14159;
// let radius ;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PIE * radius;
//     document.getElementById("myH3").textContent= circumference + "cm";

// }

// COUNTER PROGRAM
const decreaseBtn= document.getElementById("decreaseBtn");
const resetBtn= document.getElementById("resetBtn");
const increaseBtn= document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent= count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}