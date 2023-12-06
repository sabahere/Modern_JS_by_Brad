//Global and function scope

//window.alert("hello");
//alert("hello babi");

function run() {
  console.log(window.innerHeight);
}
run();

let x = 9;
if (true) {
  console.log(x, "in block");
}

function add() {
  const y = 50;
  console.log(y);
}
add();
