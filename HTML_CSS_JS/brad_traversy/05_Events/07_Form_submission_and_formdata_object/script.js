const form = document.getElementById("item-form");
function onSubmit(e) {
  e.preventDefault();
  //console.log("submit");
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  if (item === "" || priority === "0") {
    alert("Please fill all field.");
    return;
  }
  console.log(item, priority);
}
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  //   const item = formData.get("item"); //name="item"
  //   const priority = formData.get("priority"); //name="priority"
  //   console.log(item, priority);
  const entries = formData.entries();
  for (let entry of entries) {
    console.log(entry);
  }
}

/*The submit event fires when the user clicks a submit button or
 presses Enter while editing a field (e.g. <input type="text">) in a form.
 The event is not sent to the form when calling the form.submit()
method directly. */
form.addEventListener("submit", onSubmit2);
