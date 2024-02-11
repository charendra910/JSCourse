const threePromise = new Promise(function(resolve, reject){
    setTimeout(function () {
      let error = true
      if (!error) {
        resolve({
          name: "Harendra",
          email: "harendratharu0@gmail.com",
        });
      } else 
      {
        reject("Alert:Error is genereted!");
      }
    }, 1000);
  });
  
  threePromise
  .then(function(user){
      console.log(user)
      return user.email
  })
  .then(function(useremail){
    console.log(useremail)
  })
  .catch(function(error){
    console.log(error);
  }).finally((final) => console.log("Either resolved or rejected"))
  