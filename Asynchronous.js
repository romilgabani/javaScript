/*==============================================================
Hoisting in JavaScript :- 

===> we have a creation phase and execution phase.

==>  Hoisting in Javascript is a mechanism where variables and functions
     declarations are moved to the top of their scope before the code execute.

=============================================================*/
/*
console.log(myName);              // output :== undefined baz using var
var myName;
myName = "gabani";
*/


/*
console.log(myName1);     // output :== ReferenceError: Cannot access 'myName1' before initialization bcz using let 
let myName1;
myName1 = "Romil";
*/


// ***********      How it will be in output during creation phase **************************
/*
var myName = undefined;   //js by defaulf undefined value assign and undefined is a data type hai 
console.log(myName);
myName = "gabani";
*/

// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword
// // instead of var. (The other difference is that variables declared
// // with let are local to the surrounding block, not the entire function.)




/*=====================================================================================

    What is Scope Chain and Lexical Scoping in JavaScript? 

 The scope chain is used to resolve the value of variable names 
 in JS.

 scope chain in js is lexically defined, which means that we can 
 see what the scope chain will be by looking at the code. 

 At the top, we have the Global Scope, which is the window Object
 in the browser.

 Lexical Scoping means Now, the inner function can get access to 
 their parent functions variables But the vice-versa is not true.


=========================================================================================*/

let a = "Hello guys..";

const first = () =>{
    let b = "How are you....";

    const second = () =>{
        let c = "i am fine....";
        console.log(a+b+c);      // no error bcz child to parent
    }

    second();
   //  console.log(a+b+c);         // i can't use c  bcz parent to child 

}

first();


console.log();
console.log();
console.log("************=========================*********************");



/*==========================================================================================

What is Closures in JavaScript 🤔..............


// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.
=============================================================================================*/


const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a+b;
      console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5);

// // above example is === it same like lexical scoping  ...

console.log();
console.log();
console.log("************=========================*********************");

// // One more Example ....

const outerFun1 = (a) => {
  let b = 10;
  const innerFun1 = () => {
    let sum = a+b;
    console.log(`the sum of the two no is ${sum}`);
  }
  return innerFun1;
}
let checkClousure = outerFun1(10);
console.dir(checkClousure);
checkClousure();


// debugger
// var x = 10;
// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }

// var moar = foo(5); // Closure  
// /* 
//   The function below executes the function bar which was returned 
//   when we executed the function foo in the line above. The function bar 
//   invokes boop, at which point bar gets suspended and boop gets push 
//   onto the top of the call stack (see the screenshot below)
// */
// moar(15); 


console.log();
console.log();
console.log("************=========================*********************");






/*==========================================================

    Asynchronous JavaScript........

==================================================================*/


 // =====Synchronous JavaScript Prog =================//

 const fun2 = () => {
  console.log(`Function 2️ is called`);
}

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again.... `);
}

fun1();


console.log();
console.log();
console.log("************=========================*********************");



//======================Asynchronous JavaScript Prog =======================//


const function2 = () =>{
    setTimeout(()=>{
        console.log("function 2 is called...");

    },3000);
}
const function1 = () =>{
    console.log("function 1 is called...");
    function2();
    console.log("function 1 is called again....");
}

function1();



// 