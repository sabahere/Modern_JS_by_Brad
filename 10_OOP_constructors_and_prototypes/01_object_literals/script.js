const rectangle1 = {
  name: "Rectangle 1",
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

const rectangle2 = {
  name: "Rectangle 2",
  width: 30,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle2.area());
//console.log(this); //results shows window
