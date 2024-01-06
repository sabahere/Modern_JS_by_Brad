//Fetching a json file
fetch("./movies.json")
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((data) => {
    //console.log(data[1].year, data[1].title);
    return data[0];
  })
  .then((title) => {
    //console.log(title.title.length);
  });

//Fetching a text file
fetch("./test.txt")
  .then((response) => {
    //console.log(response);
    return response.text();
  })
  .then((data) => {
    return data;
    //console.log(data.length)
  });

//Fetching from an API
fetch("https://api.github.com/users/sabahere/repos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.body.querySelector("p").textContent = data[0].name;
  });
