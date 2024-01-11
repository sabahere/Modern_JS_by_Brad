const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const rect = new createRectangle(10, 20);
const rect2 = new createRectangle(100, 20);
console.log(rect.area());
console.log(rect.isSquare());
console.log(rect2.area());
