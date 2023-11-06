/* window.onload = function () {
  document.querySelector("h1").innerHTML = "Hello world";
};
 */
//or
/* window.addEventListener("load", () => {
  console.log("page loaded");
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
}); */

console.log("Script page");

//if I use defer in the script tag I can use DOM outside the window.onload content
//sdocument.querySelector("h1").innerHTML = "Hello world";

//Resize
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

//Scroll
window.addEventListener("scroll", () => {
  console.log(`Scroll to ${window.scrollX} x ${window.scrollY}`);
  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
