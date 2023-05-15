
/*=====================================================
// 1️⃣ What is Object Literal?
===================================================*/

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?
// 1st way 
let myBioData = {
    myName: "Romil Gabani",
    myAge: 21,
    getData: function () {
        console.log(`My Name is ${myBioData.myName} and my age is ${myBioData.myAge}`);
    }
}
console.log(myBioData.myName);
myBioData.getData();
console.log();

console.log("********************************");


// 2nd way no need to write functions as well after es6

let bioData2 = {
    myName: "romil patel",
    myAge: 23,
    getData() {
        console.log(`My name is ${bioData2.myName} and my age is ${bioData2.myAge}`);
    }
}

bioData2.getData();

console.log();

console.log("**********************");

// 👉 What if we want object as a value inside an Object 

// firstObj is first object
let firstObj = {
    // myname is a second object
    myName: {
        lastName: "Gabani",
        currentAge: 25

    },

    myAge: 26,
    catchData() {
        console.log(`My last name is ${firstObj.myName.lastName} and my current age is ${firstObj.myName.currentAge} `);

    }
}

console.log(" my last name is : - " + firstObj.myName.lastName);
firstObj.catchData();

console.log("***********************************************************");
console.log();



/*=============================================================

// 2️⃣ What is this Object?
================================================================*/

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  



// // For Example 1

// console.log(this);
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 



// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();

// return windows global object


// // ex 3 

// var myNames = 'vinod';        // global scope 
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// global scope ma save kareli item ne function ma mention karta this object no current context = windows global object hoi che..


// // ex 4 
const obj = {
    myAge: 26,
    myName() {
        console.log(this.myAge);
    }
}
obj.myName();
// this object no current context => obj object bani jase




// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj1 = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj1.myName();

// this object current context  => return windows object



// // ex 6

let bioData = {
    myName: {
        realName: "romil gabani",
        channelName: 'patel......'
    },
    // things to remember is that the myName is the key and the object is act like a value 
    myAge: 22,
    getData() {
        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
    }
}

bioData.getData();

// this object current context = biodata object thase

console.log();
console.log("*********************************************");


/*==============================================
========================================================
  // 5️⃣ Object Properties 
  =======================================================
  ======================================================*/

// ➡ we can now use Dynamic Properties 

let myName8 = "romil gabani";
const myBio1 = {
    [myName8]: "hello how are you?",
    [20 + 6]: "is my age"
}

console.log(myBio1);
console.log();


  // ➡ no need to write key and value, if both are same

  let myName12 = "vinod thapa";
  let myAge12 = 26;

//   const myBio = {
//       myName12 : myName12 ,
//       myAge12 :  myAge12
//     }
// output :- { myName12: 'vinod thapa', myAge12: 26 }


  const myBio = {myName12,myAge12}
  // { myName12: 'vinod thapa', myAge12: 26 }

  console.log(myBio);












  let bioData25 = {
    myName: "romil patel",
    myAge: 23,
    getData() {
        console.log(`My name is ${bioData25.myName} and my age is ${bioData25.myAge}`);
    }
}


console.log(bioData25);

console.log();
console.log();
console.log("**********************************************");


const person = { 
    name: 'Fred',
     age: 87 
    };
  
  console.log( Object.values(person) );
  
  const arrObj =  Object.entries(person); // object to array convert
  console.log(arrObj);
  
  console.log(Object.fromEntries(arrObj));       // array to object convert
  
  /**************************************
   * The Object.fromEntries() static method ;-->transforms a list of key-value pairs into an object.
   * **************************** */
  const entries = new Map([
      ['foo', 'bar'],
      ['baz', 42]
    ]);
    
    const ArrayToObj = Object.fromEntries(entries);
    
    console.log(ArrayToObj );
  
  console.log();
  console.log("*************");


  