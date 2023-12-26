const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Bella", age: 27 });
    } else {
      reject("Something went wrong.");
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((length) => {
    console.log(length);
  })
  .catch((error) => {
    console.log(error);
    return "babi";
  })
  .then((x) => console.log("This will run no matter what", x));
