//Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(`Shape name: ${this.name}`);
  }
}

//Sub class
class Rectangle extends Shape {
  constructor(name, height, width) {
    super(name);
    this.height = height;
    this.width = width;
  }
}
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  //this will override the methods in the parent class
  logName() {
    console.log("Circle name: " + this.name);
  }
}

const rect = new Rectangle("Rectangle 1 ", 4, 5);
console.log(rect.name);
rect.logName();

const cir = new Circle("circle 1", 6);
console.log(cir.radius);
cir.logName();

console.log(rect instanceof Shape); // to check whether it is the consructor of Rectangle or not
console.log(rect instanceof Rectangle);
