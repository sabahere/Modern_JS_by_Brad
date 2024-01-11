function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};
Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle("Rectangle 1", 10, 10);
const rect2 = new Rectangle("Rectangle 2", 100, 10);

console.log(rect);
console.log(rect.isSquare());
console.log(rect2.area());
console.log(rect.perimeter());
console.log(rect.changeName("Tata"));
console.log(rect2.name);
