//CALLBACKS

// function toggle(e) {
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post one", body: "This is post one." },
  { title: "Post two", body: "This is post two." },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject("Something went wrong.");
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> : ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById("posts").appendChild(h3);
}

createPost({ title: "Post three", body: "This is post three." })
  .then(getPost)
  .catch(showError);
