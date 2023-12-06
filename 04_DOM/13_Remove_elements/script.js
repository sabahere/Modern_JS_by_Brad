//Remove Elements
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

function removeItemNumber(itemNum) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child${itemNum}`);
  ul.removeChild(li);
}
//or
function removeItemNumber2(itemNum) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNum - 1];
  ul.removeChild(li);
}
//or
function removeItemNumber3(itemNum) {
  const li = document.querySelectorAll("li");
  li[itemNum - 1].remove();
}
//or
const removeItemNumber4 = (itemNum) =>
  document.querySelectorAll("li")[itemNum - 1].remove();
removeClearButton();
// removeFirstItem();
// removeItemNumber(3);
//removeItemNumber2(2);
removeItemNumber4(3);
