const myArray = ["a", "b", "c", "d", "e", "f", "g"];

// for(let i = 0; i<myArray.length; i++){
//    const elements = i + " => " + myArray[i];
//    console.log(elements);
// }

// for(let i = 0; i<myArray.length; i++){

//        if(myArray[i ]=== "d"){
//           console.log("Number d is founded.");
//           break;
//        }
//        const elements = i + " => " + myArray[i];
//        console.log(elements);
//     }




for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === "d") {
    console.log("Alphabet d is found and moving on....");
    continue;
  }
  const elements = i + " => " + myArray[i];
  console.log(elements);
}
