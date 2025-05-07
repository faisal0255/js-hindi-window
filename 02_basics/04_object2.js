// object singleton

// const twitterUser = new object();

const tinderUser = {};

tinderUser.id = "121Aba"
tinderUser.Name = "Faisal Raza"
tinderUser.isLoggedIn = false

// console.log(tinderUser.id);

const newTinderUser = {                     // objects inside object
    email : "faisal@google.com",         
    fullname: {
        userFullName : {
            firstName : "Faisal",
            lastName : "Raza"
        }
    }
}

// console.log(newTinderUser);

// merging of objects

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "c",
    4 : "d",
}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}   // we can also use this spreading technique to combine these objects and print       
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));   // Accessing the keys in objects
console.log(Object.values(tinderUser));  //   Accessing the Values in objects 
console.log(tinderUser.hasOwnProperty('id')); // checking either that object containing this property or not the ans is in boolean formate (true/false)