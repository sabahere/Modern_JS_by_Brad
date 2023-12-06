const x = 100; //x is a global variable and y is a block scope
if (true) {
  const y = 200;
  //console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
  //console.log(i);
}
if (true) {
  const a = 5;
  let b = 6;
  var c = 7;
}
//console.log(c);
//console.log(a, b); This is an error
function run() {
  var d = 100;
  console.log(d);
}
run();
//console.log(d); This is an error
