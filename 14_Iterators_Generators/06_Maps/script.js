const myMap = new Map();
myMap.set("name", "John");
myMap.set(1, "blue");
myMap.set(2, "red");

console.log(myMap.get("name"));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(2));

// myMap.delete(2);

console.log(myMap);

const peopleMap = new Map();
peopleMap.set("brad", { phone: "555-666", email: "brad@gmail.com" });
peopleMap.set("john", { phone: "777-666", email: "john@gmail.com" });
peopleMap.set("caleb", { phone: "888-666", email: "caleb@gmail.com" });

peopleMap.forEach((person) => console.log(person.email));

console.log(peopleMap.keys());
console.log(peopleMap.values());
console.log(peopleMap.entries());

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
