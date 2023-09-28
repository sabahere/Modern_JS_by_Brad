//Logical operators
//console.log(30 > 20 && 40 > 30);
let a;
a = 10 && 20; //prints 20
a = 10 && 20 && 30; //print 30
a = 10 && 0 && 30; //prints 0
a = 10 && "" && 0 && 30; //prints ''
//mostly the last one prints out

//console.log(a);

const posts = [];
posts.length > 0 && console.log(posts[0]); // does nothing

// || - will return first truthy value or the last one
b = 10 || 20; //prints 10
b = 0 || 20; // prints 20
b = 0 || "" || null; // prints null
b = 76 || 56 || 78; //prints 76
console.log(b);

// ?? - returns the right side operand when the left is null or undefined
let c;
c = 8 ?? 20; //preference is always the first value except null, undefined
console.log(c);
