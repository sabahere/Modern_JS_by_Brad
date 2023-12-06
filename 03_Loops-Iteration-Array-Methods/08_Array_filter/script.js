//Array prototype filter()
//Filter() filter out the condition given in the function within it.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNum = number.filter(function (num) {
//   return num % 2 === 0;
// });

//short version
// const evenNum = number.filter((num) => num % 2 === 0);
// console.log(evenNum);

// //using function separately
// function evenNum(num) {
//   return num % 2 === 0;
// }
//console.log(number.filter(evenNum));

/* using with forEach
number.forEach((num) => (num % 2 === 0 ? console.log(num) : null));
or
number.forEach((num) => num % 2 === 0 && console.log(num));
or
const evenNumbers = [];
number.forEach(function (num) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});
console.log(evenNumbers);

 */

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

//Get ony retail company
const retailCompanies = companies.filter(function (key) {
  if (key.category === "Retail") {
    return key;
  }
});

console.log(retailCompanies);

//Get companies that started in or after 1980 and ended in or before 2005
const companyYear = companies.filter(
  (year) => year.start >= 1980 && year.end <= 2005
);
//or
/* const companyYear = companies.filter(function (year) {
  return year.start >= 1980 && year.end <= 2005;
});
console.log(companyYear); */

//Get company that lasted more than 10 years
const CompanyLastedLong = companies.filter(function (year) {
  return year.start + 10 <= year.end;
});
console.log(CompanyLastedLong);
/* companies.forEach((year) =>
  year.start + 10 <= year.end ? console.log(year) : null
);
 */
