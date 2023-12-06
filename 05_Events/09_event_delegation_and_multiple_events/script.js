const list = document.querySelectorAll("li");
const ul = document.querySelector("ul");

//Not a good way
// list.forEach((list) => {
//   list.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.remove();
//   });
// });

/* ul.addEventListener("click", (e) => {
  //here if you console.log currentTarget It'll print ul not the target you're clicking
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

ul.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "blue";
  }
}); */
