import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/person.js";
console.log(capitalizeWords("hello, my name is saba"));
console.log(makeMoney(700));
// console.log("hello".substr(1));

const person1 = new Person("John", 30);
person1.greet();
