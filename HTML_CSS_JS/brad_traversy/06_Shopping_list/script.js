const form = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const filterInput = document.querySelector(".filter");
const clearAll = document.getElementById("clear");
const list = document.querySelector("ul");
const formBtn = form.querySelector("button");
let isEditMode = false;
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
  button.className = "remove-item btn-link text-red";
  const icon1 = createIcon1();
  const icon2 = createIcon2();
  button.appendChild(icon1);
  button.appendChild(icon2);
  return button;
}

function createIcon1() {
  const i = document.createElement("i");
  i.className = "fa-solid fa-pen";
  i.id = "icon";
  return i;
}
function createIcon2() {
  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";
  i.id = "icon";
  return i;
}
//adding Event listener to submit form
function onSubmit(e) {
  e.preventDefault();
  if (itemInput.value === "") {
    alert("Please fill the field.");
    return;
  }
  if (isEditMode) {
    const itemToEdit = list.querySelector(".edit-mode");
    removeListFromStorage(itemToEdit.textContent);
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExist(itemInput.value)) {
      alert("This item already exist!");
      return;
    }
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
  if (e.target.classList.contains("fa-xmark")) {
    if (isEditMode) {
      alert("Update the item first.");
      return;
    } else {
      if (confirm("Are you sure?") === true) {
        const targetElement = e.target.parentElement.parentElement;
        removeListFromStorage(targetElement.innerText);
        targetElement.remove();
      }
    }
  } else if (e.target.classList.contains("fa-pen")) {
    setItemToEdit(e.target.parentElement.parentElement);
  }
  //OR
  /* if (e.target.tagName === "I") {
      const li = e.target.parentElement.parentElement;
      li.remove();
    } */
  checkUI();
}
function checkIfItemExist(value) {
  const itemFromStorage = getItemFromStorage().map((v) => v.toLowerCase());
  return itemFromStorage.includes(value.toLowerCase());
}

function setItemToEdit(item) {
  isEditMode = true;
  document
    .querySelectorAll("li")
    .forEach((li) => li.classList.remove("edit-mode"));
  item.classList.add("edit-mode");
  formBtn.innerHTML =
    '<i class="fa-solid fa-pen" id="icon-pen"></i> Update Item';
  itemInput.value = item.innerText;
  formBtn.style.backgroundColor = "#228b22";
}

function removeListFromStorage(value) {
  let itemFromStorage;
  itemFromStorage = JSON.parse(localStorage.getItem("items"));
  const index = itemFromStorage.indexOf(value);
  //removeditem from storage
  itemFromStorage.splice(index, 1);

  localStorage.setItem("items", JSON.stringify(itemFromStorage));
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
  if (!isEditMode) {
    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add item';
    formBtn.style.backgroundColor = "#333";
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
checkUI();
