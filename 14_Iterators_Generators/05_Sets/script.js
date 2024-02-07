const set = new Set([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]);

set.add(9);
console.log(set.has(3));
console.log(set.has(10));
set.delete(7);
console.log(set);

const setArray = Array.from(set);
console.log(setArray);

for (let item of set) {
  console.log(item);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();
console.log(set);
