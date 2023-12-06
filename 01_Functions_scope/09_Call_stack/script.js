//Call stack type 1

/*function one() {
  console.log("one");
}

function two() {
  console.log("two");
}

function three() {
  console.log("three");
}

one();
two();
three();*/

//Call stack type 2

function one() {
  console.log("first");
  two();
}

function two() {
  console.log("second");
  three();
}

function three() {
  console.log("third");
}

one();
