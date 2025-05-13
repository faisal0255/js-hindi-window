// if conditional
// conditional operators ( > , <, <=, >=, ==, !=, ===(this is also check the data type), !==)

// if ( 2 == 7 ) {
//     console.log("true");
// } else {
//     console.log("False");
// }

// const score = 300;

// if (score > 299) {
//     const power = "fly"
//     const num = 299
//     console.log(`The man can ${power} when their score is greater than ${num}`);
// }

// const balance = 1000;

// if (balance == 1000) {
    
//     console.log("Your account balance is  1000")
// }

// +++++++++++++++++++++++++++ else if +++++++++++++++++++++++++++++++

// const balance = 174;

// if (balance < 100) {
//     console.log("balance is less than 100")
// } else if (balance < 150) {
//     console.log("balance is less than 150")
// } else if (balance < 175) {
//     console.log("balance is less than 175")
// }else {
//     console.log("Your balance is less than 250");
// };

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {          // AND Gate function...
    console.log("You can logged In and purchase the course ")
}

if (loggedInFromEmail || loggedInFromGoogle) {  // OR Gate function..
    console.log("logged In")
}