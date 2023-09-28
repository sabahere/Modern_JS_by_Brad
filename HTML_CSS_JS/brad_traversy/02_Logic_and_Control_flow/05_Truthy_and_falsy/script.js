const email = "sabahusain2001@gmail.com";
if (email) {
  console.log("you passed in an email.");
}

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
console.log(Boolean(x));

//Truhy and falsy caveats

const children = undefined;
if (!isNaN(children)) {
  // or (!isNaN(children))
  console.log("You are welcome.");
} else {
  console.log("Please enter");
}

//Checking for empty arrays
const posts = ["Post one", "Post two"];
if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No post to list");
}

//Checking for empty object
const user = {};
if (Object.keys(user).length > 0) {
  console.log("List user");
}

//Loose equality(==)
console.log(false == 0);
console.log(false === 0);
/*= in JavaScript is used for assigning values to a variable.
 == in JavaScript is used for comparing two variables,
  but it ignores the datatype of variable.
=== is used for comparing two variables, 
but this operator also checks datatype and compares two values.*/
