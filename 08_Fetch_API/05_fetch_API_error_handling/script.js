/* fetch("http://httpstat.us/200")
  .then((res) => {
    return res;
  })
  .then(() => {
    console.log("success");
  });
 */

//Test with response.ok
/* fetch("http://httpstat.us/404")
  .then((res) => {
    //console.log(res.statusText);
    if (!Response.ok) {
      throw new Error("Request failed");
    }
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  }); */

fetch("http://httpstat.us/500")
  .then((res) => {
    if (res.status === 404) {
      throw new Error("Not Found");
    } else if (res.status === 500) {
      throw new Error("Server Error");
    } else if (res.status !== 200) {
      throw new Error("Request Failed");
    }
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    document.querySelector("h1").innerText = error;
  });

/* //Catch runs on a network error
fetch("http://httpsta456/404")
  .then((res) => {
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });
 */
