function SetUserName(username) {
 this.username = username;
 console.log("called");
}

function createUser (username,email,password) {
    SetUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const newUser = new createUser("Rattan", "rattan@google.com", "1231");
console.log(newUser)