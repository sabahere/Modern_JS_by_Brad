//Function declaration
//console.log(addDollarSign(567));       initialising before declaration
function addDollarSign(value) {
  return "$" + value;
}
console.log(addDollarSign(100));

//Function expression
const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(200));
