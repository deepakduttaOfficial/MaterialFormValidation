const btn = document.querySelector(".btn");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userName.value);
  console.log(email.value);
  console.log(password.value);
  console.log(confirmPassword.value);
});
