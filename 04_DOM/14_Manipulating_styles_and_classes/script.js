//Adding and remocing styles and classes
const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const item = itemList.querySelectorAll("li");

function run() {
  //ClassName
  //console.log(itemList.className);
  //text.className = "card dark";
  //ClassList
  //console.log(itemList.classList);
  //itemList.classList.forEach((c) => console.log(c));
  //text.classList.add("dark");
  //text.classList.remove("card");
  //text.classList.toggle("dark");
  //text.classList.toggle("hidden");
  //text.classList.replace("card", "dark");
  //Change style
  //itemList.style.lineHeight = "10";
  item.forEach((item, index) => {
    if (index === 1) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
