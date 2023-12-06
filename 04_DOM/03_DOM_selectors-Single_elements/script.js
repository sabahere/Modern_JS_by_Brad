//DOM selectors single element
//document.getElementById()

/* console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

//Set attribute
document.getElementById("app-title").id = "new-id"; //setting a new id
const title = document.getElementById("app-title");
document.getElementById("app-title").setAttribute("class", "title"); //This will set a new class = title
console.log(title.className);
title.title = "shooping list"; //If you hover over SHOPPING LIST, this will appear
//document.title = "a new title"; //to change the title but it's better to do it manually on the html file
console.log(title);

//Get/Change content

console.log(title.textContent);
title.textContent = "hello world"; //Changing h1 text through id
//or
title.innerText = "hello again";
//or
title.innerHTML = "<strong> Shopping list</strong>"; //can use an element tag while using innerHTML
//Change styles
title.style.color = "#ff69b4";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";*/

//document.querySelector()
/*The Document method querySelector() returns the first Element within the document
 that matches the specified selector, or group of selectors.
 If no matches are found, null is returned.*/
/* console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector("div header"));
console.log(document.querySelector(".container"));
console.log(document.querySelector('div.form-control input[type="text"]'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector("li:nth-child(1)").innerText); */
//second list item
const second_item = document.querySelector("li:nth-child(3)");
second_item.innerText = "Apple juice";
second_item.style.color = "red";
console.log(second_item);
const list = document.querySelector("ul");
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
console.log(firstItem);
