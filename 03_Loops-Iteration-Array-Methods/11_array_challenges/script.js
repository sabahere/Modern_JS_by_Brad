//Challenge 1
const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "133-333-1341",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "121-143-1546",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "sara@gmail.com",
    phone: "131-178-4567",
    age: 30,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "459-349-1291",
    age: 23,
  },
  {
    firstName: "Jerry",
    lastName: "Dan",
    email: "jerry@gmail.com",
    phone: "675-561-9081",
    age: 22,
  },
];

const youngPeople = people
  .filter((young) => young.age <= 25)
  .map(function (properties) {
    return {
      name: properties.firstName + " " + properties.lastName,
      email: properties.email,
    };
  });
console.log(youngPeople);

//Challenge 2
const numbers = [2, -30, 15, 20, -12, -9, 7];

const positiveSum = numbers
  .filter(function (positive) {
    return positive >= 0;
  })
  .reduce((acc, positiveNum) => acc + positiveNum, 0);
console.log(positiveSum);

//Challenge 3

const words = ["coder", "programmer", "developer"];
const capitalisedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});
console.log(capitalisedWords);
