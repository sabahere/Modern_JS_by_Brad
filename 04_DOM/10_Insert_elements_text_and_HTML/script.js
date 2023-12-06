//Insert Elements, Text, HTML
//Insert Adjacent element
function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.innerText = "Insert Adjacent element";
  filter.insertAdjacentElement("beforebegin", h1);
}

//Insert adajacent text
function insertText() {
  const item = document.querySelector(".form-control");
  item.insertAdjacentText("afterEnd", "Insert adjacent text");
}

//Insert Adjacent HTML
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>Insert Adjaent HTML</h2>");
}
//insertBefore example
function insertBeforeitem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "Insert Before";
  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem); //this inserts li before thirdItem
}
insertElement();
insertText();
insertHTML();
insertBeforeitem();
