
let mySym = Symbol("date"); // symbol as data type

let myUser={
    id:1,
    [mySym]: "dhjjgfdf",        // we assess the above symbol by writing in []
    name:"Harendra",
    "email":"harendra@gmail.com",
    roll:10,
    class : [
        "hari","monday"
    ],
};

myUser.name = "RadheKrishna"
Object.freeze(myUser);   // once its freeze then value can't be override
console.log(myUser);

myUser.name = "Radhe"
console.log(myUser);

// console.log(myUser[mySym]);   //acess with in bracket
// console.log(myUser.name);
// console.log(myUser.email);
// console.log(myUser["name"]);   //bcz name is readed as string 