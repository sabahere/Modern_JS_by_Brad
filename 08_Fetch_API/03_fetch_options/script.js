function createPost(title, body) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
      //in many case peope send token
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "My title", body: "This is body" });
//you can see the status in network tab in your browser
//payload is the data that you send to the server
