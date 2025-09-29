// Classes in JS

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword () {
        return `${this.password}encrypted`
    }

    changeUsername () {
       return `${this.username.toUpperCase()}`
        }
    }

    const newUser = new user("faisalraza", "faisal@google.com" , "123123");

    console.log(user);
    console.log(newUser.encryptPassword());
    console.log(newUser.changeUsername());