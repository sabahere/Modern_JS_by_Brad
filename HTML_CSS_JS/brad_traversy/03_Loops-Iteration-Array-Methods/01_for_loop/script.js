//For loop
for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("*");
  }
}

//Loop through an array
const array = ["orange", "brown", "red", "green", "pink"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log(`${array[2]} is my favorite color.`);
