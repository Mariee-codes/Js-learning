//let num1=14;
//let num2=10;

//const isNum1GreaterOrEqualTo = num1 >= num2;

//console.log( isNum1GreaterOrEqualTo );


/*assignment operators*/

/*comparison*/
//let age=16;
//const canDrive= age >= 16? true : false;
//console.log(canDrive);

//let points=110;
//const customerType = points>100? 'gold':'silver';
//console.log(cutomerType);
/*ternary operator*/


/*logical operators*/
/*or operator*/
//console.log(true|| true); //true
//console.log(false|| true); //true
//console.log(true|| false); //true
//console.log(false|| false); //false

/*null operator*/
//leta =null;
//constresult =a ?? false;
//console.log(result);

//let a =null;
//constresult =(a !==null && a !==undefined)? a: false;
//console.log(result);

/*conditonal staements*/
//let priceOfChocolate=1.99;
//let hasAmountInCash=5;
//const canBuyChocolate=hasAmountInCash>=priceOfChocolate;
//console.log(typeof canBuyChocolate);

//if (canBuyChocolate) {
    //console.log('Enjoy your purchase');




//let hour=10;

//if (hour >=6 && hour <=12) {
   // console.log('serving breakfast');
//} else if(hour >=12 && hour <=14) {
//console.log('serving lunch');
//} else {
   // console.log('serving dinner');
//

/* if and else if staements*/
//let job='software developer';
//if(job =='software developer'){
  //  console.log('writes code');
//} else if (job=='designer'){
  //  console.log('makes user interface');
//} else if(job=='cloud enginner')

   // {
   // console.log(manages and deploys clouud references);

   // } else{
     //   console.log('works directly with customers')
   // }


   /*switch(job){
    case'software developer':
    console.log('writes code');
    break;
    case'designer':
    console.log('makes use interface' );
    break;

   }*/

   /* do while loop*/
   /*let i=0;
   do{
    console.log(i);
    i++;
   } while (i<10);*/

// const course = {
  // name:'javascript for beginners',
  // duration:3,
  // sections:7,
// };

/*console.log(course.name);
console.log(course['duration']);
console.log(course.sections);*/


/* for-in loop*/
// for (const key in course){
  // console.log(course[key]);
// }


// let numbers=[1, 2, 3, 4, 5];
// for(let idx=0;idx<numbers.length;idx++){
  // console.log(numbers[idx]);
// }


/*for of syntax*/

//for(let element of numbers){
 // console.log(element);
//}//


// for (let i=0;i<10;i++) {
  // if(i==5){
    // break; //exits the loop when i is 5
  // }
  // console.log(i);
// }

// while loop
// let  i=0;
// while(i<10) {
  // if(i==5) {
    // break;
    // console.log(i);
    // i++;
  // }
// }


// do while loop
// let i=0;
// do{
//   if(i==5) 
//   {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// while (i<10);


// for in syntax
// const obj={a:1, b:2, c:3};
// for(let key in obj){
//   if(key =='b'){
//     break;
//   }
//   console.log(obj[key]);
// }


// // four of loop
// const arr=[1,2,3,4,5];
// for(let element of arr){
//   if(element==3){
//     break;
//   }
//   console.log(element);
// }



//continu statements
// for(let i =0;i<10;i++){
//   if(i % 2 ===0) {
//     continue;
//   }else{
//     console.log('break') 
//   }
//   console.log(i)
// }



// continue statements in context of while loop
// let i=0;
// while(i<10){
//   i++;
//   if(i%2 ===0) {
//     continue;
//   }
//   console.log(i);
// }


// // do while loop
// let i=0;
// do{
//   i++;
//   if (i % 2 ===0){
//     continue;
//   }
//   console.log(i); 
// }while (i<10);

// implement two functions .for the first function have it accept an array as a parameter which contains a list of numbers .then console log even numbers in the array.fo the second function,have it accept an array and log the odd numbers.
// function displayEvenNumbers(array){
//   for(const number of array){
//     if(number%2 ===0)
//       console.log(number);
//   }
// }
// displayEvenNumbers(1,2,3,4,5,6,7,8,9,10)

// function displayOddNumbers(array){
//   for(const number of array){
//     if(number%2 !=0)
//       console.log(number);
//   }
// }

// displayOddNumbers(1,2,3,4,5,6,7,8,9,10)

