//Creating arrays
const arr0 = [0, 1, 2, 3, 4];

//Array constructor
const fruit = new Array('apple', 'grape', 'orange');
fruit[3] = 'blueberry';


//To add an array in the end
fruit.push(100);

//To delete the last element of an array
fruit.pop()

//To add an array element in the zero index
fruit.unshift(99);

//To remove zero element
fruit.shift();

//Checking the array by element 
x = fruit.includes('apple');

//Slicing start from x and stop at x-1
//x = fruit.slice(1, 3);

//splice(start, deleteCount, item0, item1, /* … ,*/ itemN)
x = fruit.splice(3, 1 , "mango");

//ARRAY NESTING

const number = [1,2,3,4];
fruit.push(number);

x = fruit[4][1];

//add two array in the same index series
x = fruit.concat(number);

//spread operator
x = [...fruit, ...'berries'];

//Flatten array
arr = [1, 2, [3, 4], 'mango', ['blue', 9], 8];
x = arr.flat();

//Static methods on array object
x = Array.isArray(fruit);

//Seperate array
x = Array.from('123456');

//craating array from variables
const m = 1;
const n = 2;
const o = 3;
x = Array.of(m,n,o);

/* console.log(x);
console.log(fruit)
*/