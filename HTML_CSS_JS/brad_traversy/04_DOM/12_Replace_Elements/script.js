//Replace elements
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.innerText = "Replacing first item";
  firstItem.replaceWith(li);
}
//or
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(3)");
  secondItem.outerHTML = "<li>Replacing second item</li>";
}
function replaceAllItem() {
  const lis = document.querySelectorAll("li");
  lis.forEach((item, index) => {
    if (index === 1) {
      item.outerHTML = "<li>Second Item</li>";
    } else {
      item.outerHTML = "<li>Replace All</li>";
    }
    //using ternary
    // item.outerHTML =
    //   index === 1 ? "<li>Second Item</li>" : "<li>Replace All</li>";
  });
}

//Using Parent
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h2");
  h2.innerHTML = "<strong>Shopping List</strong>";
  h2.id = "app-title";
  header.replaceChild(h2, h1);
}
replaceFirstItem();
replaceSecondItem();
replaceAllItem();
replaceChildHeading();
