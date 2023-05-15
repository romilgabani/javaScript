// var myFriends = ['ramesh',22,'male','arjun',20,'male','vishal',true, 52];
// console.log(myFriends);


/*====================================================
// After ES6 we have for..in and for..of loop too
=======================================================*/

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }




// Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });


/*===================================
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// // Array.prototype.find()
==============================*/

// const price = [200,300,400,500];
// const acc = price.find((element) =>{ return element <300});
// console.log(acc);

// console.log(price.find((element) => element > 500));

/*=======================================
Array.prototype.findIndex() 🙋‍♂️
=====================================*/

// console.log(price.findIndex((element) => element > 300));

// console.log("=========================================");
// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 400;
// })
// console.log(newPriceTag);


// for asecnding order 
// const array1 = [35,20];

// array1.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//         // b comes first and then a 
//     }
//     if(a<b){
//         // a comes first and then b 
//         return -1;
//     }
//     if(a==b){
//         // No changes
//         return 0;
//     }
// });



/*=======================================
// How to fatten an array 
========================================*/

// converting 2d and 3d array into one dimensional array 

const arr = [
        ['zone_1', 'zone_2'],
        ['zone_3', 'zone_4'],
        ['zone_5', 'zone_6'],
        ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
    ];

// let flatArr = arr.reduce((accum, currVal)  => { 
//           return accum.concat(currVal);
// })
// console.log(flatArr);

// console.log(arr.flat(2));
console.log(arr.flat(Infinity));





