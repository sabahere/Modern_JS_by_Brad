/* setTimeout(() => {
  console.log("hello from callback");
}, 1000);

console.log("hello from console");
 
setTimeout(changeText, 1000);*/

function changeText() {
  document.body.querySelector("h1").innerText = "Hello from call back";
}

const timerId = setTimeout(changeText, 3000);

//If I click the button before the settimeout then it get cancelled and doesn't change the text
document.body.querySelector("button").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timout cancelled");
});
