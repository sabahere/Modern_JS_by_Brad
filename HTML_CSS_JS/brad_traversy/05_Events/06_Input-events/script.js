const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
function onInput(e) {
  console.log(e.target.value);
}

/*The input event fires when the value of an <input>, 
<select>, or <textarea> element has been
 changed as a direct result of a user action (such as typing in a
 textbox or checking a checkbox). */
itemInput.addEventListener("input", onInput);

//priorityInput.addEventListener("change", onInput);
//or
priorityInput.addEventListener("input", onInput);

function onChecked(e) {
  console.log(e.target.checked);
  const check = e.target.checked;
  heading.innerHTML = check === true ? "checked" : "Not checked";
}
checkbox.addEventListener("input", onChecked);
function onFocus() {
  console.log("Input is focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "Green";
}
/*The focus event fires when an element has received focus.
 The event does not bubble, but the related focusin event that
  follows does bubble.
The opposite of focus is the blur event,
 which fires when the element has lost focus.

The focus event is not cancelable. */
itemInput.addEventListener("focus", onFocus);

function onBlur() {
  console.log("Input is not focused");
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("blur", onBlur);
