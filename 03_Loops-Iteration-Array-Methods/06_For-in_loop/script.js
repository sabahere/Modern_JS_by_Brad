//For-in loop
const colorObj = {
  color1: "Blue",
  color2: "Green",
  color3: "Black",
  color4: "Orange",
};
for (const key in colorObj) {
  console.log(key + ":", colorObj[key]);
}

const colorArr = ["red", "green", "blue", "black"];

for (const color in colorArr) {
  console.log(colorArr[color]);
}
