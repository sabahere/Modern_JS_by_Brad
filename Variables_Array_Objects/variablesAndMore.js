/*Primitive types
string, Number, Boolean, Null, Undefined, Symbol, BigInt

Reference types:
Arrays, Functions, Objects*/

let x;
x = 1;
x = 'Hello world';
//console.log(x, typeof x);

//Symbol data type
const id = Symbol('id');

//console.log(id, typeof id);

//ARRAY
let array;

array = [1,2,3,"sauce", 'maggie'];


 //CHANGING STRING TO NUMBER
x = '100';
x = parseInt(x);
//or
x = +x;
//or
x = Number(x);

//CHANGE NUMBER TO STRING
x = 5;
x = x.toString();
//or
x = String(x);
 

//STRING TO DEICMAL
x = '100.90';
x = parseFloat(x);

//CONVERT NUMBER TO BOOLEAN
x = 1;
x = Boolean(x);
/* console.log(x);
console.log(Math.sqrt(-1));
console.log(1 +NaN);
console.log('foo'/3); */
/*Foo (pronounced FOO) is a term used by programmers as a placeholder for a value
that can change, depending on conditions or on information
passed to the program. Foo and other words like it are formally
known as metasyntactic variables.*/

//Concatenation
x = 'hello' + " " + 'babi';

//EXPONENT
x = 2**8;

//OPERATORS
x = 5+5;
x = 5/5;
x = 5%5;
x = 5*5;
x = 5-5;

//ASSIGNMENT OPERATORS
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;
//true == 1
//false == 0

//WORKING WITH STRINGS
//Template literals
let name = 'saba';
x = `Hello, my name is ${name}`;

let s = "hello world";

//To uppercase
x = s.toUpperCase();
// To lowercase
x = s.toLowerCase();
//To find the letter by index number
x = s.charAt(6);
//to find the index number by letter
x = s.indexOf('w')
//To select a specific area of index numbers
x = s.substring(0, 7);
//Slicing
x = s.slice(0, 4);
//remove extra white space
x = '             hello world';
x = s.trim();
//replacing words
x = s.replace('world', 'babi');
//find string
x = s.includes('mojo');

x = s.valueOf();
//splitting into array
x = s.split(' ');// single space for splitting every char
                 // double space for splitting words


//WORKING WITH NUMBERS
const num = 5;
x = num.toString();
x = num.toFixed(3);// upto 3 decimals
x = num.toPrecision(6);
x = num.toExponential(2);

//Math Object
x = Math.sqrt(4);
x = Math.abs(-5); //change sign from - to +
x = Math.round(4.3);// average round
x = Math.ceil(4.6); // round up
x = Math.floor(4.9); //round down
x = Math.pow(2, 3); // 2^3
x = Math.min(4, 5, 6);
x = Math.max(5, 8, 3);
x = Math.random();
x = Math.floor(Math.random() * 10 + 1);

//console.log(x, typeof x);
