// const app = {
//   nextIndex: 0,
//   teams: ["Red Sox", "Yankees", "Astros", "Dodgers"],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnVlaue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnVlaue;
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
  teams: ["Red Sox", "Yankees", "Astros", "Dodgers"],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

//This only works for iterator
for (const team of app) {
  console.log(team);
}
