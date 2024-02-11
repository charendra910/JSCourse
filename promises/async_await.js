const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function () {
      let error = false
      if (!error) {
        resolve({
         id:1,
         brand: "apple"
        });
      } else 
      {
        reject("Error provoked!");
      }
    }, 1000);
  });
 
//   async function consumePromise(){
//     try {
//         const respond = await promiseFour
//         console.log(respond);
//     } catch (error) {
//         console.log(error);
//     } 
//     // finally{
//     //     console.log("Finally executed!");
//     // }
//   }

//   consumePromise();


//   async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        
//         const data = await response.json()  //convert the fetch string to a JSON object
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
//   }

//   getAllUsers();



  
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.