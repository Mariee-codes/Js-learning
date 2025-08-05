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
// let day = 1;
// switch(day){
//     case 1:
//         console.log("its Monday");
//         break;
//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wednesday");
//         break;
//      case 4:
//         console.log("its thursday");
//         break;
//      case 5:
//         console.log("its friday");
//         break;
//     case 6:
//         console.log("its saturday");
//         break;
//      case 7:
//         console.log("its sunday");
//         break;
//         default:
//             console.log(`${day} its not a day`);       
// }

// let testScore = 92;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A" ;
//         break;
//     case testScore >= 80:
//         letterGrade = "B" ;
//         break;

//     case testScore >= 70:
//         letterGrade = "C" ;
//         break;
//     case testScore >= 60:
//         letterGrade = "D" ;
//         break;
//         default:
//             letterGrade = "F";

// }
// console.log(letterGrade);

// IF STATEMENTS
// let age = 25;
// if (age>=18){
//     console.log("youre allowed to enter this site");
// }
// else {
//     console.log("youre still a minor");
// }

// let time = 9;
// if(time<12){
//     console.log("goodmiorning");
// }
// else{
//     console.log("goodafternoon")
// }

// boolean variables
// let isStudent = false;
// if (isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("youre not a student");
// }
// const myText =  document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age ;

// mySubmit.onclick = function(){
//     age= myText.value;
//     age = Number(age);

//     if(age>=100){
//         resultElement.textContent=`you are too old to enter the site`;
// }
//  else if(age >=18){
//         resultElement.textContent = `you are old enough to enter this site`
// }
// else if(age == 0){
//     resultElement.textContent=`you cant enter ,you werre just born`
// }
// else if(age<0){
// resultElement.textContent = `your age cant be below zero`
// }
// else if(age>=100){
//     resultElement.textContent = `you are too old to enter the site`
// }
// else{
//     resultElement.textContent = `you must be 18+ to enter this site`
// }
// }
// // let hasLicense = false;
// // if(age>= 15){
// //     console.log("you are old enough to drive");

// //     if (hasLicense){
// //         console.log("you have your license!");
// //     }
// //     else{
// //         console.log("you do not have your license yet");
// //     }
// // }
// // else{
// //     console.log("you must be 16+ to have a license");
// // }

 
// .checked = PROPERTY THAT DETERMINES THE CHECKED STATE OF AN HTMl CHECKBOX OR RADIO BUTTON ELEMENT.

// const visaBtn = document.querySelector("#visaBtn");
// //get data from the button
// //checked

// console.log("option selected is ",visaBtn.checked)
// visaBtn.addEventListener("click",()=>{

//     //todo();
//     console.log("option selected is ",visaBtn.checked);
//     const isChecked=visaBtn.checked;
//     if (isChecked){
//         console.log("visa was chosed");
//     }else{
//         console.log("visa was not slected");
//     }

// });

// //description
// const description=document.querySelector("#description");
// console.log("description is ",description.value);

// description.addEventListener("change",(e)=>{
//     console.log("description on change is  ",e.target.value);
// });


//variables
// const myCowIsDying= "this is my cow";
// const myCowIsAlive="this is my cow";
// 
// const myCheckbox = document.getElementById("myCheckbox");
// const subResult = document.getElementById("subResult");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paymentResult = document.getElementById("paymentResult");

// // mySubmit.addEventListener("click",()=>{

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = `you are subscribed`;
//     }else{
//         subResult.textContent = `you are not subscribed`;
//     }

// if (visaBtn.checked){
//     paymentResult.textContent = `you are paying with Visa`;
// }
// else if (masterCardBtn.checked){
//     paymentResult.textContent = `you are paying with MasterCard`;
// }
// else if (payPalBtn.checked){
//     paymentResult.textContent = `you are paying with Paypal`;
// }
// else{
//    paymentResult.textContent = `you are paying with none of the cards`;}
// };


// strimg methods = allow you to manipulate and work with text(strings)
// const myCheckbox = document.querySelector("#myCheckbox");
// const swimBtn = document.querySelector("#swimBtn");
// const drawBtn = document.querySelector("#drawBtn");
// const readBtn = document.querySelector("#readBtn");
// const playBtn = document.querySelector("#playBtn");
// const singBtn = document.querySelector("#singBtn");
// const danceBtn = document.querySelector("#danceBtn");
// const mySubmit = document.querySelector("#mySubmit");
// const outcomeElement = document.querySelector("#outcomeElement");
// const noOutcomeElement = document.querySelector("#noOutcomeElement");

// mySubmit.addEventListener("click",()=>{
//     if(myCheckbox.checked){
//         outcomeElement.textContent = `you are a swimmer`;
//     }
//     else{
//         noOutcomeElement.textContent = `you are not a swimmer`;
//     }
// })
// if(swimBtn.checked){
//     outcomeElement.textContent = `you are a swimmer`;
// }
// else if(drawBtn.checked){
//     outcomeElement.textContent = `you are a drawer`;
// }
// else if(readBtn.checked){
//     outcomeElement.textContent = `you are a reader`;
// }
// else if(playBtn.checked){
//     outcomeElement.textContent = `you are a player`;
// }
// else if(singBtn.checked){
//     outcomeElement.textContent = `you are a singer`;
// }
// else if(danceBtn.checked){
//     outcomeElement.textContent = `you are a dancer`;
// }
// else{
//     noOutcomeElement.textContent = `you are not a hobbyist`;
// }

// strimg methods = allow you to manipulate and work with text(strings)
//let userName = "BroCode    ";
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.length);

// userName = userName.trim();
// console.log(userName);

// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.replace("o","a");
// userName = userName.substring(0,3);
// userName = userName.concat(" is a good boy");
// userName = userName.indexOf("good");
// userName = userName.split(" ");
// userName = userName.replaceAll("a","o");
// userName = userName.repeat(3);
// userName = userName.trimStart();
// userName = userName.trimEnd();
// userName = userName.trimStart();
// console.log(userName);

// let result = userName.startsWith(" ");
// console.log(result);

// if(result){
//     console.log("your username cant begin wth ' '");
// }
// else{
//     console.log(" userName");
// }

// let result2 = userName.endsWith(" ");
// console.log(result2);

// if (result2){
//     console.log("your username cant end with ' '");
// }
// else{
//     console.log("userName");
// }


// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(10,"1");
// console.log(phoneNumber);
// phoneNummber = phoneNumber.padEnd(10,"1");
// console.log(phoneNumber);



// STRING SLICING IN JAVASCRIPT creating a substring from a portion of a string
// string.slice(start,end)
// const fullName = "Marie Code";
// // let firstName = fullName.slice(0,5);
// // console.log(firstName);
// // let lastName = fullName.slice(6,10);
// firstName = fullName.slice(0,fullName.indexOf(" "));
// console.log(firstName);

// lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(lastName);

// let firstChar = fullName.slice(0,1);
// console.log(firstChar);

// const email = "marie@gmail.com";
// let username = email.slice(0,email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);

// console.log(extension);
// console.log(username);

// JS METHOD CHAINING
// CALLING ONE METHOD AFTER ANOTHER IN A CHAIN

//  NO METHOD CHAINING
// let userName = window.prompt("enter your userName: ");

// userName= userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;
// console.log(userName);

// // METHOD CHAINING
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);


// JS LOGICAL OPERATORS used to combine or manipulate boolean values (true or false)
// && AND
// || OR
// ! NOT
// let temp = 15;
// if(temp > 0 && temp < 30){
//     console.log("the weather is good");

// }

// const temp2=20;
// if (temp>0){
//     console.log("its warm outside");
// }
// else if(temp<=0){
//     console.log("its cold outside");
// }
// else{
//     console.log("its freezing outside");
// }

// let temp3 = 15;
// // || or operator
// if(temp > 0 || temp < 30){
//     console.log("the weather is good");
// }

// const isSunny  = true;
// // ! not operator
// if(!isSunny){
//     console.log("its cloudy outside");
// }
// else{
//     console.log("its sunny outside");
// }


// // STRICT EQUALITY OPERATOR
// // = assignment operator
// // == equality operator(comparison operator)
// // === strict equality operator
// // != inequality opertaor
// // !== strict inequality opertaor

// // equality operator
// const PI = 3.14;
// if(PI == "3.14"){
// console.log("that is PI");
// }
// else{
//     console.log("that is not PI");
// }
// // strict equality operator
// const PI2 = 3.14;
// if(PI2 === "3.14"){
// console.log("that is PI");
// }
// else{
//     console.log("that is not PI");
// }

// const PI3 = 3.14;
// if(PI3 != "3.14"){
// console.log("that is  not PI");
// }
// else{
//     console.log("that is not PI");
// }




// // WHILE LOOP repeat some code while some comditon is true
// let userName = "MarieCode";
// while (userName === ""){
//     console.log(`enter your userName`);
// }
 
// console.log(`Hello ${userName}`);

// let userName2 = " ";
// while(userName2 === " "){
//     userName2 = window.prompt("enter your userName");
// }
// console.log(`Hello ${userName2}`);
// // while (userName ==="" || userName == null){


// // do while loop = do something once, then repeat if condition is true
// let username;
// do{
//     username = window.prompt("enter your username");
//  } while(username ==="" || username === null)
// console.log(`Hello ${username}`);

// let loggedIn = false;
// let userName3;
// let password;

// while(!loggedIn){
//     userName3 = window.prompt("enter your username");
//     password = window.prompt("enter your password");
//     if(userName3 === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("you are logged in");
//     }
//     else{
//         console.log("incorrect username or password");
//     }
// }


// let loggedIn1 = true;
// let userName4;
// let password1;

// do{
//     userName4 = window.prompt("enter your username");
//     password1 = window.prompt("enter your password");
//     if(userName4 === "myUsername" && password1 === "myPassword"){
//         loggedIn1 = true;
//         console.log("you are logged in");
//     }
//     else{
//         console.log("incorrect username or password");
//     }
// } while(!loggedIn1);


// FOR LOOP _ Repeat some code for a limited amount of time
// for(let i = 0; i <= 2; i++){
//     console.log("Hello");
// }

// for(let i = 0; i <= 2; i++){
//     console.log(i);
// }

// for (let i = 0; i<= 10; i+=2){
// console.log(i);
// }

// for (let i = 10; i>= 0; i-=2){
//     console.log(i);
// }
// console.log("Happy New Year");

// for(let i = 1; i<= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i = 1; i<= 20; i++){
//     if(i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// NUMBER GUESSING GAME
// const minNum =1;
// const maxNum = 100;
// const answer = 
// Math.floor(Math.random() * (maxNum - minNum +1)) +minNum;
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true;
// while(running){
// guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
// guess = Number(guess);}

// if(isNaN(guess)){
//     window.alert("please enter a valid number");
    
//       if(guess< minNum || guess > maxNum ){
//         window.alert("please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("too low");
//         }
//         else if(guess > answer){
//             window.alert("too high");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer} . It took you ${attempts} attempts`);
//             running = false;
//         }
//     }}
// // console.log(typeof guess, guess);


// FUNCTIONS = A section of reusable code .declare code once, use it whenever you want .call the function to execute that code
// function happyBirthday(username,age){
// // parameters = are the values passed to the function when it is declared
//     console.log("happy birthday to you");
//     console.log("happy birthday to you");
//     console.log(`happy birthday dear ${username}`);
//     console.log("happy birthday to you");
//     console.log(`you are ${age} years old`);
// }
// happyBirthday("MarieCode",20); 
// happyBirthday("John",30);
// // arguments = are the values passed to the function when it is called


// function add(x,y){
//     return  x + y;
// }
// function subtract(x,y){
//     return  x - y;
    
// }
// function multiply(x,y){
//     return  x * y;
// }
// function divide(x,y){
//     return  x / y;
// }
// function modulo(x,y){
//     return  x % y;
// }
// function isEven(number){
//     // return number %2 === 0 ? true : false; ternary operator
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
//     function isValidEmail(email){
//         if(email.includes("@") && email.includes(".")){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     // return email.inludes("@") && email.includes(".")? true : false; ternary operator
// }
// console.log(isValidEmail("marie@gmail.com"));
// // let answer = add(2,3);
// // console.log(answer);


// VARIABLE SCOPE - where a variable is recognized and accesible(local and global)
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// function function2(){
//     // local variable
//     let x = 2;
//     console.log(x);
// }
// function1();
// function2();

// let x = 3;
// // global variable

// function function1(){
//     console.log(x);
// }
// function1();

// function function2(){
//     console.log(x);
// }
// function2();

// TEMPERATURE CONVERSION PROGRAM
// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelcius = document.getElementById("toCelcius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//         temp =Number(textBox.value);
//         temp = temp * 9/5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelcius.checked){
//          temp = Number(textBox.value);
//          temp = (temp - 32) * 5/9;
//          result.textContent = temp.toFixed() + "°C";
//     }
//     else{
//         result.textContent = "Select a unit";
//     }

// }

// JAVASCRIPT ARRAYS = a variable structure that can hold more than 1 value
// let fruits = ["apple", "orange", "banana", "pear"];

// // fruits[1] = "coconut";
// fruits.push("coconut");
// add to the end of the array
// fruits.pop();
// remove from the end of the array
// fruits.shift();
// // remove from the beginning of the array
// fruits.unshift("mango");
// // add to the beginning of the array
// fruits.length;
// // get the length of the array
// fruits.indexOf("banana");
// // get the index of the value
// fruits.sort();
// // sort the array
// fruits.reverse();
// // reverse the array
// fruits.slice(1,3);
// // get a subset of the array


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");
// console.log(numOfFruits);
// console.log(index);

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(i= fruits.length; i>=0; i--){
//     console.log(fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit);
// }

// fruits.sort();
// fruits.sort().reverse();


// 2D ARRAYS = multidimensional array that stores a matrix of data in rows and columns .useful for games, spreadsheets or reperesenting images.
// const matrix =[[1,2,3],
//              [4,5,6],
//              [7,8,9]
//             ['*',0,'#']];



// for (let row of matrix){
//     //console.log(row);
//     matrix[0][0] = "x";
//     matrix[0][1] = "o";
//     matrix[0][2] = "x";

//     matrix[1][0] = "o";
//     matrix[1][1] = "x";
//     matrix[1][2] = "o";

//     matrix[2][0] = "x";
//     matrix[2][1] = "o";
//     matrix[2][2] = "x";


//     const rowString = row.join(" ");
//     console.log(rowString);
// }
// // console.log(matrix[0][0]);
// // console.log(matrix[0][1]);
// // console.log(matrix[0][2]);
// // console.log(matrix[1][0]);
// console.log(matrix[1][1]);
// console.log(matrix[1][2]);

// SPREAD OPERATOR = allows an iterable to be expanded in places where zero or more arguments are expected.

// let numbers = [1,2,3,4,5];
// let maxiNum = Math.max(...numbers);
// let miniNum = Math.min(...numbers);
// console.log(maxiNum);
// console.log(miniNum);

// let userName = "marie";
// let letters = [...userName].join("-");
// console.log(letters);

// //let fruits =["apple","orange","banana","pear"];
// let fruits = ["apple","orange","banana","pear"];
// let vegetables = ["carrot","potato","onion","tomato"];
// let foods = [...fruits,...vegetables];
// console.log(...foods);


// jAVASCRIPT REST PARAMETERS
// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }

//     const food1 = "pizza";
//     const food2 = "hamburger";
//     const food3 = "hotdog";
//     const food4 = "sushi";
//     const food5 = "ramen";

// //openFridge(food1,food2,food3,food4,food5);
// const foods = getFood(food1,food2,food3,food4,food5);
// console.log(foods);

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// const total = sum(1,2,3,4);
// console.log(`your total is $${total}`);

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const total1 = getAverage(100,20,37,49,58);
// console.log(total);



// function combineStrings(...strings){
//     return strings.join(" ");
// }
// const fullName = combineStrings("Mr.","John","Doe","111");
// console.log(fullName);


// JAVASCRIPT DICE ROLLER PROGRAM
// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values=[];
//     const images =[];

//     for(let i =0; i< numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) +1;
//         //console.log(value);
//         values.push(value);
//         images.push(`<img src="dice_images/${value}.png"alt="Dice ${value}">`);

//     }
//    // console.log(values);
//    diceResult.textContent = `dice: ${values.join(', ')}`;
//    diceImages.innerHTML= images.join('');
// }

//RANDOM PASSWORD GENERATOR
// function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789"
//     const symbolChars ="!@#$%^&*()-+";

//     let allowedChars= " ";
//     let password = " ";

//     allowedChars += includeLowercase? lowercaseChars : " ";
//     allowedChars += includeUppercase? uppercaseChars : " ";
//     allowedChars += includeNumbers ?  numberChars : " ";
//     allowedChars += includeSymbols ? symbolChars : " ";


//     if(length<= 0){
//         return `(password length must be at least 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }

//     for(let i=0; i<length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }


//    // console.log(allowedChars);
// return password;
// }


// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password =generatePassword(passwordLength,
//                                  includeLowercase,
//                                 includeUppercase,
//                                 includeNumbers,
//                                 includeSymbols);
                            
// console.log(`Generated Password:${password}`);

// callback = a function that is passed as an argument to another function.
// used to handle asynchronous operations:
// reading a file, network requests and interacting with databases."hey,when youre done call this next"

// hello(wait);
// //goodbye();
// function hello(callback){
//     //setTimeout(function(){
//         console.log("hello");
//         callback();
// }

//     function leave(){
//         console.log("leave");
//     }
//    // }, 3000);
//     function wait(){
//         console.log("wait")
//     }

// function goodbye(){
//     console.log("goodbye");
// }




// sum(displayPage, 1,2);
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// FOR EACH METHOD
// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);
// numbers.forEach(tripple);
// numbers.forEach(square);
// numbers.forEach(cube);


// function double(element,index,array){
//     array[index] = element *2;
// }

// function tripple(element,index,array){
//     array[index] = element *3;
    
// }
// function display(element){
//     console.log(element);
// }
// function square(element,index,array){
// array[index] = Math.pow(element, 2);
// }
// function cube(element){
//     array[index]= Math.pow(element,3);
// }

// let fruits = ["apple","orange","banana","coconut"];

// fruits.forEach(upperCase);
// fruits.forEach(dispaly);
// fruits.forEach(capitalize);

// function upperCase(element,index,array){
//     array[index]= element.toUpperCase();
// }
// function dispaly(element){
//     console.log(element);
// }
// function capitalize(element){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// JS MAPPING METHODS
const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
//const cubes = numbers.map(cubes);

console.log(squares);
console.log(cube);

function square(element){
    return Math.pow(element,2)
}

function cube(element){
   return Math.pow(element, 3)
}

const students= ["spongebob","pstrick","squidward","plankton"];
const studentUpper = students.map(uppercase);
const studentLower = students.map(lowerCase);

console.log(studentUpper);
console.log(studentLower);

function uppercase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































