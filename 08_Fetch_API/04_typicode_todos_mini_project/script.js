const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => {
        addTodoToDOM(todo);
      });
    });
};

function addTodoToDOM(data) {
  const div = document.createElement("div");
  div.innerText = data.title;
  div.classList.add("todo");
  div.setAttribute("data-id", data.id);

  if (data.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
}

const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: true,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
  e.target.firstElementChild.value = "";
};

function toggleCompleted(e) {
  e.preventDefault();
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
}

function updateTodo(id, completed) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteTodo(e) {
  if (e.target.classList.contains("todo")) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
}

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
  document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
};

init();
