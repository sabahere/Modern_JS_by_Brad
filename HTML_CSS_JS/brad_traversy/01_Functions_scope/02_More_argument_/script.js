//Passing strings

function register(user) {
  return user + "is registered";
}

let name;

name = register("saba ");

//console.log(name);
//Default parameters

function register2(user) {
  if (user === "saba") {
    user = "Bot";
  }
  return user;
}

//console.log(register2("saa"));

//Rest parameter - passing an array
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(...num) {
  let total = 0;
  for (const sum of num) {
    total += sum;
  }
  return total;
}

//console.log(sum2(1, 2, 3, 4, 5));

//Object as parameter

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

/*const user = {
  id: 1,
  name: "Maisel",
};
console.log(loginUser(user));*/

console.log(
  loginUser({
    id: 1,
    name: "Mrs Maisel",
  })
);

//Array as parameter
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
}

getRandom([2, 34, 56, 7, 8, 95, 90, 102, 123, 456]);
