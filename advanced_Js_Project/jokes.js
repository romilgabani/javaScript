
const jokes = document.querySelector('#jokes');
const jokesBtn = document.querySelector('#jokesBtn');





// ******************* using promise  ********************
// const generateJokes = () =>{
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((response)=>response.json() )
//      .then((data) =>{
//         jokes.innerHTML = data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// jokesBtn.addEventListener ('click',generateJokes);
// generateJokes();





// ******************** using async await *******************************


//    async makes a function return a Promise

//    await makes a function wait for a Promise

const generateJokes = async () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    try {
        const response = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await response.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`the error is ${error}`);
    }


}

jokesBtn.addEventListener('click', generateJokes);
generateJokes();





/*
                                                             ||  
promise                                                      ||                    async await  
                                                             ||
      fetch('https://icanhazdadjoke.com',setHeader)          ||  try {
       .then((response)=>response.json() )                   ||    const response = await fetch('https://icanhazdadjoke.com', setHeader);           
        .then((data) =>{                                     ||    const data = await response.json();
           jokes.innerHTML = data.joke;                      ||    jokes.innerHTML = data.joke;
       })                                                    ||    }
                                                             ||
       .catch((error)=>{                                     ||      catch(error){
        console.log(error);                                  ||          console.log(`the error is ${error}`);
     })                                                      ||       }
                                                             ||   

*/