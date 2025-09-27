// const promiseOne = new Promise (function(resolve,reject) {
//     setTimeout(function() {
//         console.log("this is the first promise")
//     }, 1000);
//     resolve();
// });

// promiseOne.then(function(){
//     console.log("promise one accepted");
// });

// const promiseTwo = new Promise (function(resolve, reject) {
//     setTimeout(function(){
//         let error = false;
//         if(!error) {
//             resolve({username:"faisal raza", pass:"faisal123"})
//         } else {
//             reject('ERROR: Something is wrong')
//         }
//     },1000)
// })

// promiseTwo.then(function(user) {
//     console.log(user);
//     return user.username
// })
// .then((username) => console.log(username))
// .catch((err)=> console.log(err))
// .finally(()=> console.log("Answer is here"))

const promiseThree = new Promise (function(resolve,reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username:"JS", pass:"121"})
        } else {
            reject("ERROR: JS is wrong")
        }
    },1000);
});

async function consumePromiseThree() {
    try {
        const response = await promiseThree
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseThree();