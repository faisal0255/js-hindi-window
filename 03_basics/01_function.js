// Adding two numbers using functions

function addTwoNumber (num1 , num2) {
   let result = num1 + num2 
   return result
}

const result = addTwoNumber(5, 4);
// console.log("Result : " , result);

// checking using function either the user enter their username or not

function loginUserName(username) {
  if(username === undefined) {
    console.log("Please enter the username")
    return 
  }
  else {
    return `${username} just logged in`
  }
}

// console.log(loginUserName("Faisal Raza"));

const user = {
  username : "faisal",
  price : 299
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObject(user);

const newArray = [100,200,500,400];

function returnSecondValue(getArray) {
  return getArray[2];
}

console.log(returnSecondValue(newArray));