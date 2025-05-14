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