//  Immediate Invoked Function Expression 

( function iife () {
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`${name} : DB Connected two`);
})("Faisal Raza");