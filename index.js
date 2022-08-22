function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeatPassword").value;

  if (password !== repeatPassword) {
    document.querySelector("#message").innerHTML =
      "Passwords do not match, please try again";
    return;
  }

  axios
    // .post("https://formserver1.herokuapp.com/signup", {
    .post("https://localhost:3000/signup", {
      firstName,
      lastName,
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#message").innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log(error.response.data);
      document.querySelector("#message").innerHTML =
        error.response.data.message;
    });
}

// LOGIN CODE///

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  axios
    // .post("https://formserver1.herokuapp.com/login", {
    .post("https://localhost:3000/signup", {
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#message1").innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log(error?.response?.data);
      document.querySelector("#message1").innerHTML =
        error.response.data.message;
    });
}
