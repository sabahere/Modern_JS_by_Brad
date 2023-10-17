const div = document.createElement("div");
div.setAttribute("class", "created");
//or
div.className = "my-class";
div.id = "new-id";
div.setAttribute("title", "My title");
//or
div.title = "my title";
div.innerText = "Hello world";
const text = document.createTextNode("Hello world again");
const heading = document.createElement("h1");
heading.innerText = "Welcome";
div.appendChild(heading);
div.appendChild(text); //This adds "hello world again" to the div element
console.log(div);
document.body.appendChild(div); //This add our newly created div in the end of html body
document.querySelector("ul").appendChild(div); //this adds div in the end of the ul
