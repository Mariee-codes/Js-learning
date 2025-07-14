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
// const decreaseBtn= document.getElementById("decreaseBtn");
// const resetBtn= document.getElementById("resetBtn");
// const increaseBtn= document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count ++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent= count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

// Math = built-in object that provides a 
//       collection of properties and methods
// Math.PI
// console.log(Math.PI);

// let x = 3;
// let y = 2;
// let z  = 1;

// z= Math.round(x);
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.ceil(x);
// z  = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z= Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// let max= Math.max(x,y,z);
// let min =Math.min(x,y,z);
// console.log(z);

// RANDOM NUMBER GENERATOR

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random()* (max -min))+min;
// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const Label1 = document.getElementById("Label1");
// const Label2 = document.getElementById("Label2");
// const Label3 = document.getElementById("Label3");
// const min =1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() *max) +min;
//      randomNum2 = Math.floor(Math.random() *max) +min;
//       randomNum3 = Math.floor(Math.random() *max) +min;
//     Label1.textContent= randomNum1;
//     Label2.textContent= randomNum2;
//     Label3.textContent= randomNum3;
// }



// WEATHER APP
// const weatherForm = document.querySelector(".weatherForm");
// const cityInput = document.querySelector(".cityInput");
// const card = document.querySelector(".card")
// const apiKey = SecretCode();

// weatherForm.addEventListener("submit", async event => {

// event.preventDefault(); //stops form from reloading page

// const city = cityInput.value;

// if(city){
//     try{
//         const weatherData = await getWeatherData(city);
//         getWeatherInfo(weatherData);
//     }
//     catch(error){
//         console.error(error);
//         displayError(error);
//     }

    
// }
// else {
//     displayError("please enter a city");
// }
// });

// const getWeatherInfo=(data) =>{
// console.log({info:data});
// displayWeatherInfo(data);
// }




// async function getWeatherData(city){
//     const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// const response = await fetch(apiurl);
//  console.log(response);

// if(!response.ok){
//     throw new Error("Could not fetch weather data");
// }
// return await response.json();

// }



// function displayWeatherInfo(data){
//     console.log("displaying")
//     console.log(data);
//     // object destructuring
//     const {name:city, 
//         main:{temp,humidity},
//         weather:[{description,id}]}= data;

//         card.textContent="";
//         card.style.display = "flex";

//         const cityDisplay = document.createElement("h1");
//         const tempDisplay = document.createElement("p");
//         const humidityDisplay = document.createElement("p");
//         const descDisplay = document.createElement("p");
//         const weatherEmoji = document.createElement("p");

//         cityDisplay.textContent = city;
//         tempDisplay.textContent = `${(temp -273).toFixed(1)} \u00B0C`
//         humidityDisplay.textContent = `Humidity: ${humidity}%`;
//         descDisplay.textContent = description;
//         weatherEmoji.textContent = getWeatherEmoji(id);

//         cityDisplay.classList.add("cityDisplay");
//         tempDisplay.classList.add("tempDisplay");
//         humidityDisplay.classList.add("humidityDisplay")
//         descDisplay.classList.add("descDisplay");
//         weatherEmoji.classList.add("weatherEmoji")



//         card.appendChild(cityDisplay);
//         card.appendChild(tempDisplay);
//         card.appendChild(humidityDisplay);
//         card.appendChild(descDisplay);
//         card.appendChild(weatherEmoji);
// }

// function getWeatherEmoji(weatherId){
//     switch(true){
//         case (weatherId >= 200 && weatherId < 300):
//             return"⛈⚡";
//         case (weatherId >= 300 && weatherId < 400):
//             return"🌧";
//         case (weatherId >= 500 && weatherId < 600):
//             return"🌧";
//         case (weatherId >= 600 && weatherId < 700):
//             return"❄";
//         case (weatherId >= 700 && weatherId < 800):
//             return"🌫";
//         case (weatherId ===800):
//             return"☀";  
//         case (weatherId >= 801 && weatherId < 810):
//             return"☁"; 
//             default:
//                 return"?";
//     }

// }

// function displayError(message){
//  errorDisplay = document.createElement("p");
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add("errorDisplay");

//     card.textContent = "" 
//     card.style.display = "flex";
//     card.appendChild(errorDisplay);

// }

























// // const getText=()=>{
// //    const text= "my family loves Marion";
// //     return text;
// // }
// // const promisegetText=async()=>{
// //  const text= "my family loves Marion";
// //     return text;
// // }
// // const main=async ()=>{
// //     let voidText= getText();
// //     console.log({voidText});
// //     let promisedText= await promisegetText();
// //     console.log({aPromise:promisedText});
// // }
// // main();



// Ternary operators
// let age = 21;
// let message = age >= 18? "youre an adult" : "youre a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12? "good morning!" : " good afternoon!";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "youre a student" : "youre not a student";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >=100? 10 :0;
// console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);



// SWITCHES
let day = 1;
switch(day){
    case 1:
        console.log("its Monday");
        break;
    case 2:
        console.log("its tuesday");
        break;
    case 3:
        console.log("its wednesday");
        break;
     case 4:
        console.log("its thursday");
        break;
     case 5:
        console.log("its friday");
        break;
    case 6:
        console.log("its saturday");
        break;
     case 7:
        console.log("its sunday");
        break;
        default:
            console.log(`${day} its not a day`);       
}

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A" ;
        break;
    case testScore >= 80:
        letterGrade = "B" ;
        break;

    case testScore >= 70:
        letterGrade = "C" ;
        break;
    case testScore >= 60:
        letterGrade = "D" ;
        break;
        default:
            letterGrade = "F";

}
console.log(letterGrade);




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































