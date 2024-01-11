function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect = new Rectangle("Rect", 10, 20);
console.log(Object.getPrototypeOf(rect));
