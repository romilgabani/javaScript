/*==========================================================

// 4️⃣ Destructuring in ES6

=========================================================*/


// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.


/*======================================
//  ➡ Array Destructuring  🏁
==========================================*/

/*
// 
  const myBioData = ['vinod', 'thapa', 26];

  let myFName = myBioData[0];
  let myLName = myBioData[1];
  let myAge = myBioData[2];

  console.log(myAge);
  */


// this is called  Array Destructuring.....
const myBioData = ['romil', 'gabani', 26];

// myFName = 0 index,  myAge = 1 index,  myLName = 2 index and so on...............
let [myFName, myAge, myLName] = myBioData;
console.log(myAge);
console.log();
console.log("*****************");


// we can add values too 

let [myFName1, myLName2, myAge3, myDegree = "Information Technology"] = myBioData;
console.log(myDegree);
console.log();
console.log("*****************");




/*================================================
// ➡ Object destructuring 🏁
==================================================*/
const myBioData2 = {
    myFname4: 'Romil',
    myLname4: 'Gabani',
    myAge4: 26
}

//   let age = myBioData2.myAge4;
//      console.log(age);
//   let myFname4 = myBioData2.myFname4;


let { myFname4, myLname4, myAge4, myDegree1 = "MCS" } = myBioData2;
console.log(myLname4);
console.log(myFname4);
console.log();
console.log("*****************");
