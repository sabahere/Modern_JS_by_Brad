const age = 19;
//Using an if statement
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote.");
}

// OR using a ternary operator
age >= 18 ? console.log("You can vote") : console.log("You can't vote");
//Assigning a value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

//Multiple statements

const auth = false;
let redirect;

// if (auth) {
//   alert("Welcome to the dashboard.");
//   redirect = "./dashboard";
// } else {
//   alert("Access denied");
//   redirect = "./Login";
// }

// redirect = auth
//   ? (alert("Welcome to the dashboard"), "./dashboard")
//   : (alert("access denied"), "./login");
// console.log(redirect);

//writing only if part in ternary, use null in place od else
auth ? console.log("Weclome to the dashboard.") : null;
//OR
auth && console.log("Welcome to the dashboard");
