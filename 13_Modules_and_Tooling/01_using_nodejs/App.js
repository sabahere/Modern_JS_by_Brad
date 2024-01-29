console.log("Hello from node js");
async function getUser() {
  const response = await fetch("https://api.github.com/users/sabahere");
  const data = await response.json();
  console.log(data);
}

getUser();
