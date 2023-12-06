//Switch operator
const d = new Date("2022-03-25");
const month = d.getMonth();

switch (month) {
  case 0:
    console.log("January");
    break;

  case 1:
    console.log("February");
    break;

  case 2:
    console.log("March");
    break;

  default:
    console.log("This is neither jan, feb nor march.");
    break;
}

switch (true) {
  case month === 2:
    console.log("It's your birthday month.");
    break;
}
