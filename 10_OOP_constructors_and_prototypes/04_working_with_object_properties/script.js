function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle("Reactangle 1", 20, 20);
const rect2 = new Rectangle("Reactangle 2", 30, 40);

console.log(rect1.name, rect2.width);
console.log(rect1["width"]);

//Add property
rect1.color = "red";

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

//delete property
delete rect2.perimeter;

//Check for property
console.log(rect2.hasOwnProperty("color"));
console.log(rect1.hasOwnProperty("color"));

//Get keys
console.log(Object.keys(rect2));

//Get values
console.log(Object.values(rect2));

//Get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== "function") {
    console.log(`${key} - ${value}`);
  }
}

console.log(rect2);
