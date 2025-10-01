class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }
}

const raza = new User("raza@email.com", "1231")
console.log(raza.email);


