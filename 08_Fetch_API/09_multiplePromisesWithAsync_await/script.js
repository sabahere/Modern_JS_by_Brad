//Callback hell vs promises

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

// getData("./movies.json")
//   .then((movie) => {
//     console.log(movie);
//     return getData("./actors.json");
//   })
//   .then((actor) => {
//     console.log(actor);
//     return getData("./directors.json");
//   })
//   .then((director) => {
//     console.log(director);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  const movies = await getData("./movies.json");
  const actors = await getData("./actors.json");
  const directors = await getData("./directors.json");
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const movieRes = await fetch("./movies.json");
  const movies = await movieRes.json();
  const actorRes = await fetch("./actors.json");
  const actors = await actorRes.json();
  const directorRes = await fetch("./directors.json");
  const directors = await directorRes.json();
  console.log(movies, actors, directors);
}

async function getAllDataWithPromiseAll() {
  const [movieRes, actorRes, directorRes] = await Promise.all([
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json"),
  ]);

  const movie = await movieRes.json();
  const actor = await actorRes.json();
  const director = await directorRes.json();

  console.log(movie, actor, director);
}

async function getAllDataWithPromiseAll2() {
  const [movie, actor, director] = await Promise.all([
    fetch("./movies.json").then((res) => res.json()),
    fetch("./actors.json").then((res) => res.json()),
    fetch("./directors.json").then((res) => res.json()),
  ]);

  console.log(movie, actor, director);
}

//getAllData();
//getAllDataWithFetch();
//getAllDataWithPromiseAll();
getAllDataWithPromiseAll2();
