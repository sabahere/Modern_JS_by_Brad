//Callback hell

function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);
  //open file via xhr
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        cb(JSON.parse(this.responseText));
      } else {
      }
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

/* getData("./movies.json");
getData("./directors.json");
getData("./actors.json"); */

//To console.log data serially movies->actor->director
getData("./movies.json", (data) => {
  console.log(data);
  getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});
