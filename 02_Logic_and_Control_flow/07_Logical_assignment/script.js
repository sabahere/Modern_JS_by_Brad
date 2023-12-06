//Logical assignment
// || - assigns always the left side value expect when the left side is null, 0, undefined
let a = false;
if (!a) {
  a = 10;
}
//OR
a = a || 10;
//OR
a ||= 10;
console.log(a);

// && - assigns always the right side value but it gives pecendence to number < 0 or null < ''
let b = 10;
if (b) {
  b = 20;
}
//OR
b = b && 20;
//OR
b &&= 20;
console.log(b);

// ?? - assigns the right side value but gives precedence to null, undefined
let c = null;
if (c === null || c === undefined) {
  c = 20;
}
c = c ?? 20;
//OR
c ??= 20;

console.log(c);
