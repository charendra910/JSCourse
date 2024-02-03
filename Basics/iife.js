//immediately invoked function expression (IIFE)      //iife is writen to show the function after windows

(function name(){
    console.log("Hello user")                    //named iife
}) ();


((email) =>{
    console.log(`Your email id is ${email}!`)       //without named iife
}) ("harendra@gmail.com")