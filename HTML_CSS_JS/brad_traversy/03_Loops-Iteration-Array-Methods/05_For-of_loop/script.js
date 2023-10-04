//Loop through arrays
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
