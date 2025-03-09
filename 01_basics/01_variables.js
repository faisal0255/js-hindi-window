const accountId = 18438
let accountEmail = "faisal@goodle.com"
var accountPass = "4323"
accountCity = "Bengaluru"
let accountState ;

// accountId = 423 error / not allowed

accountEmail = "faisal@google.com"
accountPass = "485733"
accountCity = "Bihar,Patna"

console.log(accountId);

/* 
prefer not to use var
because od issue in block scope and functional scope
*/

console.table([accountId,  accountEmail, accountPass, accountCity, accountState])