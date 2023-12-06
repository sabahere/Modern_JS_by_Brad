//Custom insertAfter() challenge
//By me
function createButton(li) {
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  button.appendChild(i);
  li.appendChild(button);
}

function createLi(newEl) {
  const li = document.createElement("li");
  li.className = "item";
  li.id = "lists";
  const text = document.createTextNode(newEl);
  li.appendChild(text);
  createButton(li);
  return li;
}
function insertAfter(newEl, existingEl) {
  const ul = document.querySelector("ul");
  const li = createLi(newEl);
  const existingElement = document.querySelector(`li:nth-child(${existingEl})`);
  const nextElement = existingElement.nextElementSibling;
  ul.insertBefore(li, nextElement);
}
insertAfter("Pineapple", 2);

//By brad
/* function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

//New element to start
const li = document.createElement("li");
li.textContent = "Insert me after";

//Existing element to insert after

const existingEl = document.querySelector("li:nth-child(2)");

//Our custom functuion
insertAfter(li, existingEl); */
