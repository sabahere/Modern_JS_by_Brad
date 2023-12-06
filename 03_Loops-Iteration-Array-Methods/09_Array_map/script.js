/* map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array. */

numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* const doubledNum = numbers.map(function (num) {
  return num * 2;
}); */

//using arrow function
/* const doubledNum = numbers.map((num) => num * 2);
console.log(doubledNum);
 */

//using function separately
/* function doubledNum(num) {
  return num * 2;
}
console.log(numbers.map(doubledNum));
 */

//using forEach
/* let arr = [];
numbers.forEach((num) => arr.push(num * 2));
console.log(arr); */

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

/* //create an array of company names

const companyName = companies.map((company) => company.name);
console.log(companyName);

//using for each
const companyName = [];
companies.forEach((company) => companyName.push(company.category));
console.log(companyName);


//using function separately

function companyName(company) {
  return company.name;
}
console.log(companies.map(companyName));

//Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

//using it with normal function
const companyInfo = companies.map(function (company) {
  return { name: company.name, category: company.category };
});
console.log(companyInfo);

//using forEach
let newArray = [];
//Create an array with just company and category
const companyInfo = companies.forEach((company) => {
  newArray.push({
    name: company.name,
    category: company.category,
  });
});
console.log(newArray);

//Create an array of length of each company in years

const companyYears = companies.map((company) => company.end - company.start);
console.log(companyYears);

//Create an array of object with the length and name of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});

console.log(companyYears);*/

//chain map methods
const squareAndDouble = numbers
  .map((num) => Math.sqrt(num))
  .map((doubledNum) => doubledNum * 2);

console.log(squareAndDouble);

const squareAndDouble2 = numbers
  .map(function (doubledNum) {
    return doubledNum * 2;
  })
  .map(function (sqrt) {
    return Math.sqrt(sqrt);
  })
  .map(function (tripledNum) {
    return tripledNum * 3;
  });
console.log(squareAndDouble2);

//chaining different methods

const filterAndDoubled = numbers
  .filter((num) => num % 2 === 0)
  .map(function (even) {
    return even * 2;
  });
console.log(filterAndDoubled);
