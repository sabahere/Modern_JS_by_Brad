//querySelectorAll()
/*The Document method querySelectorAll() returns a static (not live) 
NodeList representing a list of the document's elements
that match the specified group of selectors.

const listItems = document.querySelector(".items");
console.log(listItems);
const items = listItems.querySelectorAll("li");
console.log(items);
console.log(items[1].innerText);
//items.style.color = "red"; It's an error coz style is for specific element
items.forEach((item, index) => {
  item.style.color = "red";

  if (index === 0) {
    item.remove();
  }
  if (index === 1) {
    item.innerText = "Pomegranate";
  }
});

//This is an error
const listItem2 = document.getElementsByClassName("item");
//listItem2.forEach((item) => console.log(item));
//forEach() doesnt work if we are getting elementsbyclassName or id or anything, to loop over
//the list of item fetched by getElements, convert it to an array then loop over it
//const listArray = Array.from(listItem2);
listArray.forEach((item) => (item.innerText = "Oranges"));
console.log(listItem2);*/
const listItem3 = document.getElementsByTagName("li");
console.log(listItem3[1].innerText);
