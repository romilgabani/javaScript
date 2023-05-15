
//  promise produce
const promiseObject = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        reject('Error while communicating..');
    }, 2000);

});

const getBiodata = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: 'romil gabani',
                age: 22
            }
            resolve(`My roll no is ${indexdata}, My name is ${biodata.name} and I am ${biodata.age} years old.`);

        }, 2000, indexdata)
    });
}


// *************** async / await ************************

async function getData() {

    try {
        const rollNoData = await promiseObject;
        console.log(rollNoData);

        const biodatas = await getBiodata(rollNoData[1]);
        console.log(biodatas);

        return biodatas;

    }catch(error){
        console.log(`The Error : ${error}`);

    }

}

/*
const getname = getData();
console.log(getname);
O/P :==> 

Promise { <pending> }
[ 1, 2, 3, 4, 5 ]
My roll no is 2, My name is romil gabani and I am 22 years old.

*/

const getname = getData().then((myName) => {
    console.log(myName);
});


