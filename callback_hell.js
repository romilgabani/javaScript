const getRollNo = () =>{
    setTimeout(() =>{
        console.log('API getting roll No..');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollno) =>{             // rollno ==> is a parameter
            const biodata = {
                name : 'romil gabani',
                age : 25
            }
            console.log(`my roll no is ${rollno} . My name is ${biodata.name} and I am ${biodata.age} years old.`);

            setTimeout((name) =>{

                biodata.gender = 'male';
                console.log(`my roll no is ${rollno} . My name is ${biodata.name} and I am ${biodata.age} years old. & gender is ${biodata.gender}`);



            },2000,biodata.name);
        },2000,roll_no[1]);         // roll_no[1] ==> is a argument(value) bcz parameter argument access karse..

    },2000);
}

getRollNo();