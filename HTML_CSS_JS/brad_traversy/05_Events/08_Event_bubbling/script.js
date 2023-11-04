//Event bubbling
const button = document.querySelector(" form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");
console.log(div);
button.addEventListener("click", (e) => {
  alert("button was clicked");
  //if you wanna stop these event
  e.stopPropagation();
});
div.addEventListener("click", () => {
  alert("div was clicked");
});
form.addEventListener("click", () => {
  alert("form was clicked");
});
document.body.addEventListener("click", () => {
  alert("body was clicked");
});
