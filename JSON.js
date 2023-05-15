/*
/ // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:
*/

let my_Object ={
    key_1 : "romil",
    key_2 : true,
    key_3 : 25

};

let object_as_string = JSON.stringify(my_Object);    /// this method convet kare che object to JSON ma
console.log(object_as_string);

// typeof(object_as_string); // o/p :- "string"

// // // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

var object_as_string_as_object = JSON.parse(object_as_string); // this method convert JSON to object
console.log(object_as_string_as_object );

// typeof(object_as_string_as_object);  // o/p :- 'object' 