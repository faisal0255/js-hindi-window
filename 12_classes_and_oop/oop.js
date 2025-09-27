// Constructor function

function user (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = new user("Faisal", 13, true)
const usertwo = new user("anup", 15, false)

console.log(userOne)
console.log(usertwo)