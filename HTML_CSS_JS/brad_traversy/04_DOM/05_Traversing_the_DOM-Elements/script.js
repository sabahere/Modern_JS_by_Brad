//Get child elements
const parent = document.querySelector(".parent");
console.log(parent);
let output = parent.children;
output = parent.children[2].className;
output = parent.children[1].nodeName; //nodeName = div
output = parent.children[1].innerText;
output = parent.children;
output[1].innerText = "child two";
output[0].style.color = "red";
parent.firstElementChild.innerText = "kiddish";
document.querySelector(".parent").lastElementChild.innerHTML =
  "<h3> childyyy</h3>";
parent.children[1].nextElementSibling.innerText = "child three";
parent.children[1].previousElementSibling.innerText = "child one";
//Get parent element from child
const child = document.querySelector(".child");
console.log(child.parentElement);
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

//Sibling elements
const sibling3 = document.querySelector(".child:nth-child(2)");
output = sibling3;
sibling3.nextElementSibling.innerText = "childtttttttt";
sibling3.previousElementSibling.style.color = "green";
console.log(output);
