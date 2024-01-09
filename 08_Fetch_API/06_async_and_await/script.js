const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});

//promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await res.json();

  console.log(data);
}

const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await res.json();

  console.log(data);
};
getPosts();
//getUsers();
