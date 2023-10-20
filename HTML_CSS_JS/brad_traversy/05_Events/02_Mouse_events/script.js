//Mouse events
const logo = document.querySelector("img");
const onClick = () => console.log("click event");
const onDoubleClick = function (e) {
  console.log("double click event");
  const li = document.querySelectorAll("li");
  li.forEach((li) => {
    li.style.backgroundColor = "black";
    li.style.color = "#fff";
  });
};
const onRightClick = () => console.log("Right click event");

/*The mousedown event is fired at an Element when a pointing device button is pressed
 while the pointer is inside the element.*/
const onMouseDown = () => console.log("Mouse down event");

/*The mouseup event is fired at an Element when a button on a
 pointing device (such as a mouse or trackpad) is released while
 the pointer is located inside it.*/
const onMouseUp = () => console.log("Mouse up event");
const onMouseWheel = () => console.log("Mouse wheel event"); //No longer recommended
const onMouseOver = () => console.log("Mouse over event");
const onMouseOut = () => console.log("Mouse out event");
const onDragStart = () => console.log("Drag start event");
const onDrag = () => console.log("Drag event");
const onDragEnd = () => console.log("Drag end event");

//Event listeners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("onmousewheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);
