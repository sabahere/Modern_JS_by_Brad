//Arrow functions

const add = (a, b) => {
  return a + b;
};
console.log(add(5, 6));

//Implicit return

const substract = (a, b) => a - b;
const double = (a) => a * a;
console.log(substract(7, 6));
console.log(double(9));

//Returning an object
const createObj = () => ({
  name: "saba",
  id: 4,
});
console.log(createObj());

//Returning an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});
//or
numbers.forEach((n) => console.log(n));
