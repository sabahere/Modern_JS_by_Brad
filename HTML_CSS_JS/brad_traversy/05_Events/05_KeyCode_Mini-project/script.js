//Method 1
// window.addEventListener("keydown", function (e) {
//   const insert = document.getElementById("insert");

//   insert.innerHTML = `
//     <div class="key">${e.key === " " ? "Space" : e.key}
//     <small>e.key</small>
//     </div>
//     <div class="key">${e.keyCode}
//     <small>e.keyCode</small>
//     </div>
//     <div class="key">${e.code}
//     <small>e.code</small>
//     </div>`;
// });

//Method 2

function showKeyCodes(e) {
  function createh1() {
    const h1 = document.createElement("h1");
    const h1_text = document.createTextNode(e.keyCode);
    h1.appendChild(h1_text);
    insert.appendChild(h1);
  }
  const insert = document.getElementById("insert");
  insert.innerHTML = "";
  const h1 = createh1();

  const keyCodes = {
    "e.key": {
      description:
        "The value of key pressed. Accounts for modifiers keys that return CAPS and alternate chars.",
      value: e.key === " " ? "Space" : e.key,
    },
    "e.which": {
      description:
        "event.which and event.keyCode are deprecated in modern browsers. Use .key or .code instead. ",
      value: e.which,
    },
    "e.code": {
      description:
        "The physical key on the keyboard. Doesn't care if you are holding a modifier like Shift.",
      value: e.code,
    },
  };
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const value = document.createTextNode(keyCodes[key].value);
    const small = document.createElement("small");
    const valueText = document.createTextNode(key);
    const description = document.createElement("div");
    description.className = "description";
    const descriptionText = document.createTextNode(keyCodes[key].description);

    div.appendChild(value);
    small.appendChild(valueText);
    div.appendChild(small);
    description.appendChild(descriptionText);
    div.appendChild(description);
    insert.appendChild(div);
  }
}

window.addEventListener("keypress", showKeyCodes);
