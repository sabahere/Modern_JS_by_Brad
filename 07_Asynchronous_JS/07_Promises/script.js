//resolve - promise complete and its succesful
//reject - promise can be fulfilled i.e, gives error

const promise = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve(); //it means everything went okay
  }, 1000);
});

//this will console.log after the above promise
promise.then(() => {
  console.log("Promise consumed..");
});

/* new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve(); //it means everything went okay
  }, 1000);
}).then(() => console.log("Promise 2 consumed")); */

/* new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    resolve({ name: "Sara", age: 22 }); //it means everything went okay
  }, 1000);
}).then((user) => console.log(user));

OR*/

const getUser = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "Sara", age: 22 }); //it means everything went okay
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

//catch is use to remove default error
//finally runs in both resolve and reject condition
getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise has been resolved or rejected"));

console.log("Hello from global");
