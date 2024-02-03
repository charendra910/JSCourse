// function add(...num1){
//     return num1
// }
// console.log(add(200,56,123));



const user ={
    username:"harendra",
    roll:10,
}

// function add(user){
//     console.log(`the name of person is ${user.username} 
//     and his roll number is ${user.roll}`)
// }   

// Or we can write

function add(obj1){
    console.log(`the name of person is ${obj1.username} 
    and his roll number is ${obj1.roll}`)
}

add(user)