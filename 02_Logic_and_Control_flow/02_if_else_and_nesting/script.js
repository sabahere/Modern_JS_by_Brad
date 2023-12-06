const d = new Date(10, 30, 2022, 18, 0, 0);
const hour = d.getHours();
if (hour < 12) {
  console.log("Good Morning!");
} else if (hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Goodnight");
}
//using && and || operator
if (hour > 6 && hour < 12) {
  console.log("It's Morning");
}

if (hour === 18 || hour === 7) {
  console.log("It's study time");
}

//Nested
if (hour > 13) {
  if (hour === 16) {
    console.log("Have dinner.");
  } else {
    console.log("Have a nice day!");
  }
}
