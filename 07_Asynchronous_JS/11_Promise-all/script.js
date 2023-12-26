//Promise.all()

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    //open file via xhr
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong.");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromsie = getData("./movies.json");
const actorsPromsie = getData("./actors.json");
const directorsPromsie = getData("./directors.json");

const dummyPromise = new Promise((resolve, reject) => {
  resolve("hello world");
});

Promise.all([moviesPromsie, actorsPromsie, directorsPromsie, dummyPromise])
  .then((data) => {
    console.log(data);
    console.log(data[0]);
    return data[0];
  })
  .then((movie) => {
    console.log(movie[0].title);
  })
  .catch((error) => {
    console.log(error);
  });
