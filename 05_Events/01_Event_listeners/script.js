//Event listeners
function onClear() {
  alert("clearrrr");
}

const clearBtn = document.querySelector("#clear");
/* clearBtn.onclick = onClear;
//or
clearBtn.onclick = function () {
  console.log("clear items");
}; */

//Two onclick = () => {} at the same time on same button, only runs the second onclick function
//But using addEventListener we can run as many as we want, simultaneously

//Alert() is a blocking operator

/*clearBtn.addEventListener("click", onClear);
clearBtn.addEventListener("click", () => console.log("buahahaha")); */

/*The global setTimeout() method sets a timer which executes a function
 or specified piece of code once the timer expires. When we use removeEventListener with setTimeout, it removes the addEventListener after 5s
clearBtn.addEventListener("click", onClear);
setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);*/

// clearBtn.addEventListener("click", onClear);
// setTimeout(() => clearBtn.click(), 5000);

//Onclick remove all item from the list
function removeItem() {
  const list = document.querySelector("ul");
  const li = list.querySelectorAll("li");
  // li.forEach((item) => item.remove());
  //or
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
clearBtn.addEventListener("click", removeItem);
