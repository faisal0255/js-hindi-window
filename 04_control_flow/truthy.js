const userEmail = "faisal@ai";

if (userEmail) {
    console.log("User email accepted");
} else {
    console.log("User email unfilled");
}

// Here are the truthy & falsy value

// Falsy Value
// false, 0, -0, BigInt, 0n, "", null , undefined, NaN

//Truthy value
// "0" , "false" (values which are falsy they are become truthy while kept in "" ), " " (space in quote is truthy value), [],{}, function(){}

const emptyObj = {  }


if (Object.keys(emptyObj).length === 0) {
    console.log("user email gotted");
    console.log("array is empty");
} else {
    console.log("array is filled")
}


// Nullish Coalescing Operator (??) : null or undefined;

let val1;

// val1 = 10 ?? 2;
// val1 = null ?? 4 ;
// val1 = null ?? undefined ;
 val1 = undefined ?? null ;
// val1 = 10 ?? undefined

console.log(val1);

// terniary Operator

// condition ? true : false

const icePrice = 100;
icePrice >= 80 ? console.log("icePrice is less than 80") : console.log("icePrice is more than 80")