/* const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(Date.now());
}
 */

//changing color and stopping color change like theme

let intervalId;

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(randomColor, 1000);
  }
}

/* function changeColor() {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
} */

//To have a random color

function randomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalId);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);
