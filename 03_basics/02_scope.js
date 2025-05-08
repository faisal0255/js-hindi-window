//let a = 400;    // global scope (it can be accessible to inside a loop or outside as well)

if (true) {
    let a = 300;  // block scope (it can only access inside this function)
    const b = 4
    var c = 44
    console.log(a);
}

// console.log(a)

