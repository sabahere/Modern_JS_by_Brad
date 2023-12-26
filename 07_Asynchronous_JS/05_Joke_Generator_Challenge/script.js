//Joke generator project

const jokeEl = document.getElementById("joke");

function jokeGenerate() {
  //xhr request initialise
  const xhr = new XMLHttpRequest();

  //open xhr file
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  //adding jokes via xhr
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);
        addJokeText(data);
      } else {
        jokeEl.innerText = "Something went wrong (Not Funny)";
      }
    }
  };
  xhr.send();
}

//adding joke text to the screen
function addJokeText(text) {
  jokeEl.innerText = text.value;
  jokeEl.style.fontSize = "18px";
}

//addeventlistener to the button to generate jokes
document.querySelector("button").addEventListener("click", jokeGenerate);
