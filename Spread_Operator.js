/*====================================
// 7️⃣Spread Operator
======================================*/

const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

const MyFavColors = [ ...colors, 'yellow', 'black'];

console.log(MyFavColors);




// ES7 features 

// 1: array include 
const color = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = color.includes('purple');     // true or false
console.log(isPresent);

// 2: **    // Exponentiation Operator
console.log(2**3); 




// ES2018

const person = { 
    name: 'Fred', age: 87, degree : "mcs" 
};
const sPerson = { ...person };

console.log(person);
console.log(sPerson);