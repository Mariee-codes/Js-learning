// const number =[5,4,3,2,1];
// adding to the end of array
// number.push(7);
// console.log(number);

// adding to the beginning of array
// number.unshift(25);
// console.log(number);

// adding to the middle of array
// number.splice(1,0,24,25);
// console.log(number);


//const numbers=[5,4,3,2,1];

// const indexOfThree=numbers.indexOf(3);
// console.log(indexOfThree);

// *function declaration
// const employees =[
//     {
//         id:1,
//         name:'jim'
//     },
//     {
//         id:2,
//         name:'michael Scott'
//     },
//     {
//         id:3,
//         name:'pam'
//     }
// ];

// // const employee=employees.find(function(e){
// //         return e.name==='jim'
// // });

// const employee=employees.find((e)=>e.name ==='jim');
// console.log(employee);

// // *removing elements from an array
// const numbers=[1,2,3,4,5];
// // const lastElement= numbers.pop();
// // console.log(`lastElement:${lastElement}`);

// const firstElement=numbers.shift();
// console.log(`fisrtElement:${firstElement}`);

// const middleElement=numbers.splice(1,1);
// console.log(`middleElement:${middleElement}`);

// // *emptying an array
// const number =[1,2,3,4,5];
// while(numbers.lenght>0)
//     numbers.pop();

// numbers.lenght=0;
// console.log(numbers);

// const deleteNumbers=numbers.splice(0,numbers.length);
// console.log(`deleteNumbers:${deleteNumbers}`);


// combining arrays
// const exampleNumbersA=[1,2,3];
//  const exampleNumbersB=[4,5,6];

// // const combinedArray= exampleNumbersA.concat(exampleNumbersB);
// // console.log(combinedArray);

// // *slice method
// // const firstSlice=combinedArray.slice(0,4);
// // console.log(firstSlice);

// // *spread method
// let combined=[...exampleNumbersA,...exampleNumbersB];
// console.log(combined);

// itertate over an array
// const numbers =[1,2,3,4,5];
// for(let number of numbers)
//     console.log(number);

// *joining arrays
// const numbers =[1,2,3,4,5];
// const joinedNumbers= numbers.join(',');
// console.log(joinedNumbers);

// const courseName='javascript for beginners';
// const parts= courseName.split(' ');
// const urlslug=parts.join('-');
// console.log(urlslug);


// sorting arrays
// let characters=['c','d','b','a'];
// characters.sort();
// console.log(characters);

// characters.reverse();

// let employees=[
//     {id:1,name:'jen'},
//     {id:2,name:'steven'},
//     {id:3,name:'andrew'},
//     {id:4,name:'terry'},
// ];
// employees.sort((a,b) => {
//     const lowercaseA= a.name.toLowerCase();
//     const lowercaseB= b.name.toLowerCase();
//     if (lowercaseA <lowercaseB) return -1;
//     if (lowercaseA >lowercaseB) return 1;
//     return 0;
// });
// console.log(employees);



// const numbers =[2,4,6,8,10];
// const areAllEven = numbers.every(number => {
//     return number % 2 === 0
// });
// console.log(`areAllEven: ${areAllEven}`);

// const numbers=[1,3,5,7,8,9];
// const hasOneEvenNumber = numbers.some(number=> number % 2===0);
// console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);


// const numbers =[1,2,3,4,5,6];
// const evenNumbers = numbers.filter(number => number % 2=== 0);
// console.log(evenNumbers);

// *mapping an array
// const numbers=[2,4,6,8,10];
// const squaredNumbers = numbers.map(num => num*num);
// console.log(squaredNumbers);

// const characters=['a','b','c','d'];
// const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters); 

// reducing an array
//const numbers= [1,10,5,14];
// let sum = 0;

// for (const num of numbers)
//     sum += num;
// console.log(`total sum: ${sum}`);

