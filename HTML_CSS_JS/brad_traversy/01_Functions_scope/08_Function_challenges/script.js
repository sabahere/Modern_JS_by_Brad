//CHALLENGE 1
//Fahrenheit to celsius

function getCelcius(a) {
  const calculation = (5 * (a - 32)) / 9;
  return calculation;
}

console.log(`The temperature is ${Math.round(getCelcius(78))}\xB0C`);

//using IIFE
/* (function getCelcius(a) {
  const calculation = (5 * (a - 32)) / 9;
  console.log(calculation);
})(78); */

//Arrow function
const Getcelcius = (a) => {
  return (5 * (a - 32)) / 9;
};
//console.log(Getcelcius(32));

//CHALLENGE 2
//MIN AND MAX NUMBER

const numbers = [1, -5, 8, 4, 3, 7, 87, 98];

function minMax(n) {
  const min = Math.min(...n);
  const max = Math.max(...n);
  console.log(`Max : ${max} and Min : ${min}`);
  return {
    min,
    max,
  };
}

console.log(minMax(numbers));

//CHALLENEGE 3
//Create an IIFE by taking length and breadth and outputting the area of a reactangle as console.log within the function

((length, breadth) => {
  const area = length * breadth;
  const output = `The area of rectangle with a length of ${length} and breadth of ${breadth} is ${area}.`;
  console.log(output);
})(3, 4);
