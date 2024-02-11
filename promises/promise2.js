// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     }, 2000)
// }).then(function(){
//     console.log("Task number 2 is completed!");
// })

const prommiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task3 is completed");
      resolve({
        id: 1,
        name: "Harendra",
        email: "harendra@gmail.com",
        profile: {
          id: 1,
          name: "Roshan",
        },
      });
    }, 1000);
  })
  
  prommiseThree.then(function(user){
      console.log(user);
  })