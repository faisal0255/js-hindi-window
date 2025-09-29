// Inheritance

class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user {
    constructor (username , email, password) {
        super (username)  // super keyword is used for going through their parent class and take username...
        this.email = email;
        this.password = password
    }

    addCourse () {
        console.log(`A new course is added by ${this.username}`)
    }
}

const rashid = new Teacher("Faisal", "faisal@teacher.com" , "123123")

rashid.addCourse();

const anup = new user("Anup Kumar");

anup.logMe()

console.log(anup == rashid)