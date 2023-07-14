//Capitalize challenge

const a = "developer"
let b;
b = a[0].toUpperCase() + a.slice(1, 9);

b = a.charAt(0).toUpperCase() + a.substring(1);

b = a[0].toUpperCase() + a.substring(1);

//console.log(b);

//Number challenge

let y, z;
y = Math.floor(Math.random() * 100 + 1);
z = Math.floor(Math.random() * 50 + 1);

let sum, diff, multiply, quotient, remainder;

sum = y + z;
diff = y - z;
multiply = y*z;
quotient = y/z;
remainder = y % z;

/* console.log(y, z);
console.log(sum);
console.log(diff);
console.log(multiply);
console.log(quotient);
console.log(remainder);
 */
//Array challenge1
let array0;

array0 = [1, 2, 3, 4, 5];
array0.push(6)
array0.unshift(0);
array0.reverse();

//Array challenge2

arr1 = [1, 2, 3, 4, 5, 6]
arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();
arr2.shift();

x = arr1.concat(arr2);
console.log(x);