// adding property is any function or array 

const hero = ["Shaktiman", "BalVeer"]

let heroPower = {
    Shaktiman: "Swing",
    BalVeer: "Invisible"
}

Object.prototype.faisal = function () {
    console.log(`Faisal is a prototype in all object`);
}

// heroPower.faisal();
// hero.faisal();

// inheritance

const user = {
    name: "Faisal Raza",
    email: "faisal@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingAssistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assingnment',
    fulltime: 'yes',
    __proto__: teachingAssistant  // we can use it also from inside..
}

teacher.__proto__ = user    // we can use prototype model from outside the object

// Modern Syntax

Object.setPrototypeOf(teacher,teachingAssistant)

// setting a new function using "prototype" 

let myName = "Faisal Raza";
let anotherUserName = "AnupKumar     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength();
"Faisal Raza".trueLength()