/* 
Target         - The element that trigerred the event.
Current target - The element that the event listener is attached to
type           - The type of event that was trigerred
timeStamp      - The time that the event was trigerred
ClientX        - The x position of the mouse click relative to the window
ClientY        - The y position of the mouse click relative to the window
OffsetX        - The x position of the mouse click relative to the element
OffsetY        - The y position of the mouse click relative to the element
PageX          - The x position of the mouse click relative to the page
PageY          - The y position of the mouse click relative to the page
ScreenX        - The x position of the mouse click relative to the screen
ScreenY        - The y position of the mouse click relative to the screen
*/

const logo = document.querySelector("img");

function onClick(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   e.target.style.backgroundColor = "black";
  //   console.log(e.type);
  //   console.log(e.timeStamp);
  //   console.log(e.clientX);
  //   console.log(e.clientY); //Client X, Y means that the position where we clicked is x or y distance left or down from the corner of the window/tab
  //   console.log(e.offsetX);
  //   console.log(e.offsetY);
  //   console.log(e.pageX); //As same as clientX
  //   console.log(e.pageY);
  //   console.log(e.screenX); //relative to the whole laptop screen
  //   console.log(e.screenY);
}
logo.addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("link was clicked");
});

logo.addEventListener("drag", function (e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
});

/* document.body.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.backgroundColor = "black";
}); */
