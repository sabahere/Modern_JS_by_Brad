//innerHTML vs CraeteElement()

//Quick and dirty way
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item}
            <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
            </button>`;
  document.querySelector(".items").appendChild(li);
}
createListItem("Kiwi");

//Clean & Performant
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item)); //creates text
  const button = document.createElement("button");
  const i = document.createElement("i");
  button.className = "remove-item btn-link text-red";
  i.className = "fa-solid fa-xmark";
  button.appendChild(i);
  li.appendChild(button);
  li.className = "item";
  document.querySelector(".items").appendChild(li);
}
createNewItem("Banana");

const remove = document.querySelectorAll(".item");
console.log(remove[1]);
//remove[3].remove();
//continuation......to next file Refactor to multiple functions
