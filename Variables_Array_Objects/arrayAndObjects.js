//Creating arrays
const arr0 = [0, 1, 2, 3, 4];

//Array constructor
const fruit = new Array("apple", "grape", "orange");
fruit[3] = "blueberry";

//To add an array in the end
fruit.push(100);

//To delete the last element of an array
fruit.pop();

//To add an array element in the zero index
fruit.unshift(99);

//To remove zero element
fruit.shift();

//Checking the array by element
x = fruit.includes("apple");

//Slicing start from x and stop at x-1
//x = fruit.slice(1, 3);

//splice(start, deleteCount, item0, item1, /* … ,*/ itemN)
x = fruit.splice(3, 1, "mango");

//ARRAY NESTING

const number = [1, 2, 3, 4];
fruit.push(number);

x = fruit[4][1];

//add two array in the same index series
x = fruit.concat(number);

//spread operator
x = [...fruit, ..."berries"];

//Flatten array
arr = [1, 2, [3, 4], "mango", ["blue", 9], 8];
x = arr.flat();

//Static methods on array object
x = Array.isArray(fruit);

//Seperate array
x = Array.from("123456");

//craating array from variables
const m = 1;
const n = 2;
const o = 3;
x = Array.of(m, n, o);

//OBJECT LITERALS
const person = {
  name: "Mrs Maisel",
  age: 26,
  address: {
    street: "404 Riverside drive",
    city: "Manhattan",
    State: "NYC",
  },
};
x = person.name;
x = person["name"];
x = person.address.State;

person.children = 2; //cannot assign person.children.name1 = 'ethan'

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
//person.greet();

//OBJECT SPREAD OPERATORS AND METHODS

const todo = new Object();
todo.id = 1;
todo.name = "exercise";

const person2 = {
  name: "Saba",
  age: 22,
  address: {
    street: "Iron gate",
    city: "Kolkata",
    State: "WB",
    coords: {
      lat: 56.67,
      long: 56.786,
    },
  },
};
x = person2.address.coords.lat;

const obj1 = { a: 1, b: 3 };
const obj2 = { c: 5, d: 6 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = { obj1, obj2 };

//or

const obj5 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: "brekafast" },
  { id: 2, name: "study" },
  { id: 3, name: "sleep" },
];

x = todos[0].name;

x = Object.keys(todos).length;
x = Object.values(todos);
x = Object.entries(todos);
x = todo.hasOwnProperty("name");

//DESTRUCTURING
const FirstName = "Harry";
const SecondName = "Potter";
const Age = "30";

const person3 = {
  FirstName,
  SecondName,
  Age,
};

const todo2 = {
  id: 1,
  title: "homework",
  date: "6thJuly",
  user: {
    name1: "saba",
  },
};
// from object to separate variables
//
const {
  id: mynewId,
  title,
  date,
  user: { name1 },
} = todo2;

//console.log(name1);

//DESTRUCTURING ARRAY
const nums = [23, 67, 45, 56, 34];

const [firstNum, secondNum, thirdNum, ...rest] = nums;
//console.log(firstNum, secondNum, thirdNum, rest); //rest can be rename as anything

//JSON INTRODUCTION

const post = {
  id: 1,
  title: "post one",
  body: "This is the body.",
};

//Convert to JSON object
const str = JSON.stringify(post);

//JSON object's subset can't be outputed as console.log(str.id); --> This will give undefined
//If you wannna output a JSON object, parse it into js objects

//Parse JSON

const objt = JSON.parse(str);
//console.log(objt.id);

const posts = [
  {
    id: 1,
    title: "post one",
    body: "This is the body.",
  },
  {
    id: 1,
    title: "post two",
    body: "This is the body.",
  },
];

const str1 = JSON.stringify(posts);
//console.log(str1);
