//DOM node relationship
/*Generally when you are working with the DOM you will be working with elements
 since most often you want to interact with HTML elements. Nodes are the more generic
  version of an element. A node could be an HTML element,
 but it could also be anything else in an HTML document, such as text or comments.*/
let output;
const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[1].textContent;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].innerText;
//parent.childNodes[3].outerHTML = '<div class="item"> Hello world</div>';
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";
output = parent.firstChild;
output = parent.lastChild;
//output = parent.lastChild.textContent = "Hellooo";

//Parent node from child
const child = document.querySelector(".child");
output = child.parentNode;
child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.border = "1px solid #000";
child.parentNode.style.padding = "10px";

//Siblings
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextSibling;
output = secondItem.previousSibling;
console.log(output);
