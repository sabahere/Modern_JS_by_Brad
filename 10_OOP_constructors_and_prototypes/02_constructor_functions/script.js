function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

function Square(name, side) {
  this.name = name;
  this.side = side;

  this.area = function () {
    return this.side * this.side;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 10);
console.log(rect1.name);
console.log(rect1.height * rect1.width);
console.log(rect1.area());

const rect2 = new Rectangle("Rectangle 2", 20, 30);
console.log(rect2.area(), rect1.area());

//1. A new empty object is created
//2. The constructor function is called with the arguments that we passed in.
//3. The `this` keyword is set to the new empty object.
//4. The new object is returned from the constructor function.

console.log(rect2.constructor); //console.log the rectangle function
console.log(rect2 instanceof Square); // to check whether it is the consructor of Rectangle or not
