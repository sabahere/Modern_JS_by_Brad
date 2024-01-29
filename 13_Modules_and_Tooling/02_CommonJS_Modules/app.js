const { capitalizeWords, makeMoney } = require("./utils");
const Person = require("./person");

console.log(capitalizeWords("hello, my name is saba"));
console.log(makeMoney(700));
//console.log("hello".substr(1));

const person1 = new Person("John", 30);
console.log(person1.greet());
