// for loop

for (let i = 1; i <= 5; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 1; j <=5; j++) {
     //  console.log(`inner loop ${j} and outer loop is ${i}`)
       // console.log(i + '*' + j + '=' + i*j)
    }
    
}

// break & continue in loop

for (let index = 1; index <= 15; index++) {
    if (index === 5) {
        // console.log(index);
        // console.log("This is best number and we have to exit from here");
        // break;  // it is used to break the loop and stop the loop from here....
    }
    // console.log(index);
    
}

for (let index = 1; index <= 15; index++) {
    if (index == 5) {
        // console.log(index);
        // console.log("5 is best number and we have to continue from here");
        // continue; // continue is used for check the number and continue from here as it aspected
    }
    // console.log(index);
    
}

// for of loop

const arr = ["Tamil" , "Hindi", "Bhojpuri", "Bengali"]
 
//const arr = [1,3,4,5,6]

for (const element of arr) {
    //console.log(element);
}

const greeting = "Hello World"

for (const greet of greeting) {
//  console.log(`This is greeting from me ${greet}`)
// }

const myName = "Faisal Raza"

for (const letters of myName) {
   if (letters === " ") {         // skipping the space between two name....
    continue;
   }
    console.log(letters);  
}