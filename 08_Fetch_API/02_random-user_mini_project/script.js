function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.results[0];
    })
    .then((detail) => {
      console.log(detail);
      displayUser(detail);
    });
}

function displayUser(user) {
  if (user.gender === "female") {
    document.body.style.backgroundColor = "#a1076e";
  } else {
    document.body.style.backgroundColor = "#02367b";
  }

  const users = document.body.querySelector("#user");

  users.innerHTML = `<div class="inline">
          <img id="image" src="${user.picture.medium}" />
        </div>
        <div class="inline">
          <p id="name">
            <span><strong>Name: </strong></span>${
              " " +
              user.name.title +
              " " +
              user.name.first +
              " " +
              user.name.last
            }<span></span>
          </p>
          <p id="email">
            <span><strong>Email: </strong></span><span>${
              " " + user.email
            }</span>
          </p>
          <p id="phone">
            <span><strong>Phone: </strong></span><span>${
              " " + user.phone
            }</span>
          </p>
          <p id="location">
            <span><strong>Location: </strong></span><span>${
              " " + user.location.city
            }, ${user.location.state}</span>
          </p>
          <p id="age">
            <span><strong>Age: </strong></span><span>${user.dob.age}</span>
          </p>
        </div>`;
}
document.body.querySelector("button").addEventListener("click", fetchUser);
