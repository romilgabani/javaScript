  /*
syntax ==>
  new Promise(executor)

  ***** Promise Constructor ****:== 

  const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

********** promise as an Object ***** 

        getBiodata valo content



  */
  
  
  // executor function ===> 2 argument hai resolve and reject
   //  promise produce
const promiseObject = new Promise((resolve , reject ) =>{      // resolve/reject as a argument che but use karenge as a function tarike

    setTimeout( () =>{
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);       // resolveFunction(value) // call on fulfilled
        reject('Error while communicating..'); // rejectFunction(reason)  // call on rejected
    },2000);

});

const getBiodata = (indexdata) =>{
    return new Promise((resolve , reject) =>{
        setTimeout((indexdata) =>{
            let biodata = {
                name : 'romil gabani',
                age : 22
            }
            resolve(`My roll no is ${indexdata}, My name is ${biodata.name} and I am ${biodata.age} years old.`);

        },2000, indexdata)
    });
}


  // promise consume

  promiseObject.then( (rollno) =>{
      console.log(rollno);

    //   getBiodata(rollno[1]).then( (getBiodata_Promise_resolve) =>{
    //       console.log(getBiodata_Promise_resolve);

    //   })       // or 

        return getBiodata(rollno[1]);

  }).then ((getBiodata_Promise_resolve) =>{
      console.log(getBiodata_Promise_resolve);
      
  }).catch((error)=>{
      console.log(error);

  });