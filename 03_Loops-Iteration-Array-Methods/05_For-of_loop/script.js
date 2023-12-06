/*Loop through arrays
For-of loops = The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more
It prints the value of array, string or more and loop over it one by one by itself.*/
const items = ["books", "chair", "table", "cupboard", "almirah"];

for (const item of items) {
  console.log(item);
}

const users = [
  { name: "Saba" },
  { name: "Aliya" },
  { name: "Cidra" },
  { name: "Misba" },
];

for (const user of users) {
  console.log(user);
  console.log(user.name);
}

//Loop over strings
const str = "My name is saba.";

for (const strr of str) {
  console.log(strr);
}

//Loop over Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);
for (const [key, value] of map) {
  console.log(key + ": ", value);
}
