/*The reduce() method of Array instances executes a user-supplied "reducer" 
callback function on each element of the array, in order,
passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalNum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

console.log(totalNum);

//using for loop
/*let totalNum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  totalNum2 += numbers[i];
}
console.log(totalNum2);

//using foreach
let num2 = 0;
numbers.forEach((num) => (num2 += num));
console.log(num2);
*/

const cart = [
  { id: 1, name: "product1", price: 150 },
  { id: 2, name: "product2", price: 175 },
  { id: 3, name: "product3", price: 130 },
];
//Calculate total price using reduce()
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(totalPrice);
