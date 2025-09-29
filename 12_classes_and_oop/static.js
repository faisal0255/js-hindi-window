// static property in JS 

class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }

    // giving a static property which means that specific function is not accesible to any child which usually inherits other property from their parent class  but can't able to inherit that specific prop like createId which is made

      static createId () {                 
        return `1231`
    }
}

const hitesh =  new User ("Hitesh Sir")

console.log(hitesh.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const terabyte = new Teacher("Terabyte", "terabyte@tera.com")
console.log(terabyte.createId())