class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }

  static getClass() {
    return "Rectangle";
  }
}

const rect = new Rectangle("Rectangle 1", 4, 4);
console.log(rect.area());
console.log(Rectangle.getClass()); //you can't use rect coz it's static
