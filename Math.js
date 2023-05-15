


// The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI); 
console.log(Math.PI);
console.log("******************************************\n*****************************************");

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer

let num = 10.501;
let num1 = 10.401;
console.log(Math.round(num));
console.log(Math.round(num1));
console.log("******************************************\n*****************************************");


// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(2,3));
console.log(2**3);
console.log("******************************************\n*****************************************");


// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));
console.log("******************************************\n*****************************************");


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(955));
console.log(Math.abs(4-6));
console.log("******************************************\n*****************************************");



// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));
console.log(Math.round(4.51));

console.log(Math.ceil(99.01));
console.log(Math.round(99.1));
console.log("******************************************\n*****************************************");


 
// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7)); 
console.log(Math.floor(99.1)); 
console.log("******************************************\n*****************************************");



// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log("******************************************\n*****************************************");



// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log("******************************************\n*****************************************");



// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10)); // 0 to 9
console.log("******************************************\n*****************************************");



// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number 
// rounded to the nearest integer.

console.log(Math.round(4.6));
console.log(Math.round(99.1));
console.log("******************************************\n*****************************************");



// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));

console.log(Math.trunc(-99.1));
console.log(Math.ceil(-99.51));
console.log(Math.floor(-99.1));
console.log(Math.floor(-99.5));
console.log("******************************************\n*****************************************");

// Practice Time 

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().
