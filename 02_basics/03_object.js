// object literals..

const newUser = {
   name : "Faisal Raza",
   age : 18,
   college : "RGPV",
   email : "faisal@google.com",
   city : "Patna, Bihar",
   isLoggedIn : "false",
   lastLoggedIn : "3 days ago",
};

console.log(newUser.email);

newUser.email= "faisal@chatgpt.com"
console.log(newUser.email);

object.freeze(newUser)  // freezeing is used for not change in objects further

newUser.name = "Rashid Kamal";

console.log(newUser);
console.log(newUser.name);
