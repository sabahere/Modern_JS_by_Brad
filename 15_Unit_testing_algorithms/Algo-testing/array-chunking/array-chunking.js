// const chunk = (array, size) => {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// };

function chunk(array, size) {
  let chunked = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = [];
    for (let j = 0; j < size && i + j < array.length; j++) {
      chunk.push(array[i + j]);
    }
    chunked.push(chunk);
  }

  return chunked;
}

module.exports = chunk;

// const array = [];

// let array1 = [1, 2];
// let array2 = [3, 4];

// array.push(array1);
// array.push(array2);

// console.log(array);
