const form = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const filterInput = document.querySelector(".filter");
const clearAll = document.getElementById("clear");
const list = document.querySelector("ul");
//check UI state
checkUI();

function toDisplay() {
  let itemFromStorage = getItemFromStorage();
  itemFromStorage.forEach((item) => createNewItem(item));
  checkUI();
}
//Creating new list with the given input
function createNewItem(item) {
  const li = createList(item);
  document.querySelector("ul").appendChild(li);
}
function createList(item) {
  const li = document.createElement("li");
  li.className = "item";
  li.id = "lists";
  li.innerText = item;
  const button = createButton();
  li.appendChild(button);
  return li;
}
function createButton() {
  const button = document.createElement("button");
  button.id = "button";
  button.className = "remove-item btn-link text-red";
  const icon = createIcon();
  button.appendChild(icon);
  return button;
}

function createIcon() {
  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  i.id = "icon";
  return i;
}
//adding Event listener to submit form
function onSubmit(e) {
  e.preventDefault();
  console.log("mean babi");
  if (itemInput.value === "") {
    alert("Please fill the field.");
    return;
  }
  createNewItem(itemInput.value);
  addItemToLocalStorage(itemInput.value);
  itemInput.value = "";

  checkUI();
}

//adding item to local storage
function addItemToLocalStorage(value) {
  let itemFromStorage = getItemFromStorage();

  itemFromStorage.push(value);

  localStorage.setItem("items", JSON.stringify(itemFromStorage));
}

function getItemFromStorage() {
  let item;
  if (localStorage.getItem("items") === null) {
    item = [];
  } else {
    item = JSON.parse(localStorage.getItem("items"));
  }
  return item;
}
//Removing items
//Clearing all items at once
function onClearAll() {
  const li = document.querySelectorAll("li");
  if (confirm("Are you sure?")) {
    li.forEach((item) => item.remove());
    localStorage.clear();
    checkUI();
  }
}

//removing the corresponding li of the corresponding clicked icon
function removeListByIcon(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?") === true) {
      const targetElement = e.target.parentElement.parentElement;
      removeListFromStorage(targetElement.innerText);
      targetElement.remove();
    }
  }
  //OR
  /* if (e.target.tagName === "I") {
      const li = e.target.parentElement.parentElement;
      li.remove();
    } */
  checkUI();

  function removeListFromStorage(value) {
    let itemFromStorage;
    itemFromStorage = JSON.parse(localStorage.getItem("items"));
    const index = itemFromStorage.indexOf(value);
    //removeditem from storage
    itemFromStorage.splice(index, 1);

    localStorage.setItem("items", JSON.stringify(itemFromStorage));
  }
}

//Clear UI state
function checkUI() {
  const li = document.querySelector("li");

  if (li === null || li === undefined || li === 0) {
    filterInput.style.display = "none";
    clearAll.style.display = "none";
  } else {
    filterInput.style.display = "block";
    clearAll.style.display = "block";
  }
}
//Filter Item
function filterItem(e) {
  const li = document.querySelectorAll("li");
  const text = e.target.value.toLowerCase();
  li.forEach((item) => {
    const itemText = item.innerText.toLowerCase();

    if (itemText.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

form.addEventListener("submit", onSubmit);
clearAll.addEventListener("click", onClearAll);
list.addEventListener("click", removeListByIcon);
filterInput.addEventListener("input", filterItem);
document.addEventListener("DOMContentLoaded", toDisplay);
