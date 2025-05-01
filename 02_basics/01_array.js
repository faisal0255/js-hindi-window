const myarr = [1,2,3,4,5,6];

// myarr.push(10);  // adding element to the last of the array
// myarr.push(23);  
// myarr.pop();  // removing array from last of the array
// myarr.unshift(90); // adding element  in starting of the array
// myarr.shift();  // removing  element  in starting of the array
// myarr.shift();
// myarr.shift()

// console.log(myarr.includes(11));  // finding elements in array 
// console.log(myarr.indexOf(11));
// console.log(myarr);

console.log("A ", myarr);

const myna1 = myarr.slice(1,3);
console.log(myna1);

console.log("B ", myarr);

const myna2 = myarr.splice(1,3);
console.log("C ", myarr);
console.log(myna2);