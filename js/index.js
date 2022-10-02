const btn = document.querySelector(".btn");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const inputs = document.querySelectorAll("input");
// Helper text
const userNameHelper = document.getElementById("userNameHelper");
const emailHelper = document.getElementById("emailHelper");
const passwordHelper = document.getElementById("passwordHelper");
const confirmPasswordHelper = document.getElementById("confirmPasswordHelper");
// Input label
const userNameLabel = document.getElementById("userNameLabel");
const emailLabel = document.getElementById("emailLabel");
const passwordLabel = document.getElementById("passwordLabel");
const confirmPasswordLabel = document.getElementById("confirmPasswordLabel");

const alertMass = document.getElementById("alertMass");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  alertMass.style.display = "none";

  const userNameCheck = userNameValidation(userName.value);
  const emailCheck = emailValidation(email.value);
  const passwordCheck = passwordValidation(password.value);
  const confirmPasswordCheck = confirmPasswordValidation(
    confirmPassword.value,
    password.value
  );

  if (userNameCheck && emailCheck && passwordCheck && confirmPasswordCheck) {
    alertMass.style.display = "block";
    userName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
});

function userNameValidation(name) {
  if (name.length === 0) {
    userNameHelper.innerHTML = "User name is required";
    userName.style.outlineColor = "red";
    userNameLabel.style.color = "red";
    return false;
  }
  return true;
}

function emailValidation(mail) {
  if (mail.length === 0) {
    emailHelper.innerHTML = "Email is required";
    email.style.outlineColor = "red";
    emailLabel.style.color = "red";
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    emailHelper.innerHTML = "Enter valid email";
    email.style.outlineColor = "red";
    emailLabel.style.color = "red";
    return false;
  }
  return true;
}

function passwordValidation(pass) {
  if (pass.length <= 0 || pass.length > 10) {
    passwordHelper.innerHTML = "Password should be between 0 to 10 Char.";
    password.style.outlineColor = "red";
    passwordLabel.style.color = "red";
    return false;
  }
  return true;
}

function confirmPasswordValidation(conPass, pass) {
  if (conPass.length <= 0 || conPass.length > 10) {
    confirmPasswordHelper.innerHTML =
      "Password should be between 0 to 10 Char.";
    confirmPassword.style.outlineColor = "red";
    confirmPasswordLabel.style.color = "red";

    return false;
  }
  if (conPass !== pass) {
    confirmPasswordHelper.innerHTML =
      "Password and confirm password are not match";
    confirmPassword.style.outlineColor = "red";
    confirmPasswordLabel.style.color = "red";
    return false;
  }
  return true;
}

//
for (const input of inputs) {
  input.addEventListener("input", () => {
    input.removeAttribute("style");
    userNameHelper.innerHTML = "";
    emailHelper.innerHTML = "";
    passwordHelper.innerHTML = "";
    confirmPasswordHelper.innerHTML = "";
    userNameLabel.removeAttribute("style");
    emailLabel.removeAttribute("style");
    passwordLabel.removeAttribute("style");
    confirmPasswordLabel.removeAttribute("style");
    alertMass.style.display = "none";
  });
}
