class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log("Rectangle Area: " + this.area());
  }
}

const rect = new Rectangle("Rectangle1", 3, 4);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(Object.getPrototypeOf(rect));
rect.logArea();
