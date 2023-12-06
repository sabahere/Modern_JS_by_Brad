//While and do-while loop
let i = 0;
while (i <= 20) {
  console.log("Number" + i);
  i++;
}

//Loop over array
const arr = [10, 20, 30, 40];
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}
//Don't use same variable in two while loops like i, j
//Nested while loops
let m = 0;
while (m <= 5) {
  console.log("Number" + m);
  let j = 1;
  while (j <= 5) {
    console.log(`${m}x${j} = ${m * j}`);
    j++;
  }
  m++;
}

//Do-while
let n = 0;
do {
  console.log("Number" + n);
  n++;
} while (n <= 10);
