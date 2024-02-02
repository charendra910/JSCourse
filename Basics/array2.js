const marvel = ["a","b","c","d","e","f"];
const dc =["q","s","t","u","v"];

// marvel.push(dc);
// console.log(marvel);

// const bth=marvel.concat(dc);   
// console.log(bth);      

// let spread = [...marvel, ...dc];
// console.log(spread);

// let ar1= ["a","b",1,34,45,6,[1,23,4],[234,"sdf",56,[11,22,33,"45"],{a:"as",name:"harendra"},true,"moon"],1,3]
// let combine = ar1.flat(Infinity);
// console.log(combine);
// console.log(ar1.length); 


// console.log(Array.isArray("a","b","c","d","e","f"));   //false mean it is not array
// console.log(Array.from("Harendra")); //convert harendra to array

// let a=12312;
// let b="Harendra";
// let c=[1,2,"hdsf"];
// let d=Array.of(a,b,c);
// console.log(d);

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