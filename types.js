// ES2020
// #1: BigInt

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
// 9007199254740991 aa nummber ni aagal performs karvu hoi to  (n) lagadvu;

console.log( 9007199254740991n + 12n );
const newNum = 9007199254740991n + 12n;

console.log(newNum);
console.log(typeof(newNum));

console.log();
console.log();
console.log("***********************************************");

const foo = null ?? 'default string';
console.log(foo);

const foo1 = "default parameter" ?? null;
console.log(foo1);

const foo2 = "default parameter" ?? "parameter";
console.log(foo2);

console.log();
console.log();
console.log("***********************************************");



// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);