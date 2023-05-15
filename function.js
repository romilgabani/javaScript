/*==============================
// function
================================*/

// function sum(){
//     var a=5,b=6;
//     console.log(a+b);
// }
// sum();



/*======================================================================

// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.
==========================================================================*/

// function sum(a,b){
    
//     console.log(a+b);
// }
// sum(5,8);



/*========================================================

// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "
=========================================================*/

// function sum(a,b){
    
//     console.log(a+b);
// }
// var funExp = sum(5,12);



/*==================================================
// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"
======================================================*/



// function sum(a,b){
    
//     return a+b;
// }
// var funExp = sum(5,10);
// console.log(funExp);



/*============================================================
// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.
===================================================================*/



// var anoFun = function(a,b){
    
//     return a+b;
// }
// var funExp = anoFun(5,25);
// console.log(funExp);



/* ============================================
templete literals(template strings)
=============================================*/

// for(let num = 1; num<=10;num++){
//     let tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }



/*=================================================
Default parameters:-

// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.
=================================================*/

/*     error :-NaN (bcz only one value pass ) 
function mul(a,b){
    return a*b;
}

console.log(mul(5));
*/

// function mul(a,b=4){
//     return a*b;
// }

// console.log(mul(5));





/*================================================

// 6️⃣ Fat Arror Function 

================================================*/

// 👻 Normal Way of writing Function 

/*     ==> no error
console.log(sum()); 

function sum() {
  let a = 5; b = 6;
  let sum = a+b;
 return `the sum of the two number is ${sum}`;
}
*/



/*   
// ReferenceError: Cannot access 'sum' before initialization

console.log(sum());
const sum = () => {
    let a=5,b=6;
    let sum = a+b;
    return `the sum of the two number is ${sum}`;
}
*/



// const sum = () => {
//     let a=5,b=8;
//     let sum = a+b;
//     return `the sum of the two number is ${sum}`;
// }
// console.log(sum());


// const sum = () => {
//     let a=5,b=4;
//     return `the sum of the two number is ${a+b}`;
// }
// console.log(sum());


// const sum = () => {
//     return `the sum of the two number is ${(a=5) + (b=15)}`;
// }
// console.log(sum());


// const sum = () =>  `the sum of the two number is ${(a=5) + (b=18)}`;
// console.log(sum());






/*=======================================================================================

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 



===========================================================================================
===========================================================================================
// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 


// //  calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 


===========================================================================================
===========================================================================================
==============================================================================================*/


// // // we need to create a calculator 

const addition = (a,b)=>{
    return a+b;
}

const subtraction = (a,b)=>{
    return a-b;
}

const multiplication = (a,b)=>{
    return a*b;
}


const calculator = (num1,num2,operator) =>{
    return operator(num1,num2);
}

/*
// // calculator(5,2,subs)

       calculator is a higher order function  And
       addition/subtracton/multiplication is a call back function....
*/

console.log(calculator(5,2,addition));

console.log(calculator(2,5,subtraction));

console.log(calculator(5,2,multiplication));


console.log();
console.log();
console.log("****************************************");


/*=======================================================================================================
=========================================================================================================
  ************  callback Hell ******************

======================================================================================================*/

setTimeout(()=>{
    console.log(`1️⃣ works is done`);    
    setTimeout(()=>{
        console.log(`2️⃣ works is done`); 
        setTimeout(()=>{
            console.log(`3️⃣ works is done`);  
            setTimeout(()=>{
                console.log(`4️⃣ works is done`); 
                setTimeout(()=>{
                    console.log(`5️⃣ works is done`);   
                    setTimeout(()=>{
                        console.log(`6️⃣ works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)


console.log();
console.log();
console.log("****************************************");


/*======================================================================

 ******************  currying function ********************************

 // curring is a technique of evaluating function with multiple arguments , into sequence of function with single argument.

 ==> In other words, when a function, instead of taking all arguments at one time, 
 takes the first one and return a new function that takes the second one and 
 returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
 =========================================================================*/


  function sum(num1){
      return function(num2){
          return function(num3){
              console.log(num1 + num2 + num3);
          }
      }
  }


 sum(5)(8)(8);

 // reduces this code...


//  (num1) => {
//      (num2) => {
//          (num3) => {
//              console.log(num1 + num2 + num3);
//         }
//     }
// }

// sum(5)(8)(8);


// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
       
// sum(5)(8)(8);


const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
       
sum1(5)(8)(8);





/*=======================================
=====================================

   async await 

   async using normal function :=

   async function functionname(){

   }

    
   fat arrow function using..

   const  anyname =  async () =>{

   }




===============================================
================================================*/