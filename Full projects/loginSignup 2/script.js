const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");

// user info from storage
let loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || [];

const matchingUser = loginInfo.find(
  (user) =>
    user.username.toLowerCase() === user.username.toLowerCase() &&
    user.password === user.password
);

console.log(matchingUser, "________")

let isLoggedIn = matchingUser && matchingUser.isLoggedIn;

const inputEmail4 = document.getElementById("inputEmail4");
const inputPassword4 = document.getElementById("inputPassword4");
const inputAddress = document.getElementById("inputAddress");
const inputAddress2 = document.getElementById("inputAddress2");
const inputCity = document.getElementById("inputCity");
const inputState = document.getElementById("inputState");
const inputZip = document.getElementById("inputZip");

// sign up

const signUpForm = (event) => {
  event.preventDefault();

  const signUpData = {
    inputEmail4: inputEmail4.value,
    inputPassword4: inputPassword4.value,
    inputAddress: inputAddress.value,
    inputAddress2: inputAddress2.value,
    inputCity: inputCity.value,
    inputState: inputState.value,
    inputZip: inputZip.value,
    isLoggedIn: true,
  };

  window.localStorage.setItem("signUpData", JSON.stringify(signUpData));

  const loginInfo = {
    email: inputEmail4.value,
    password: inputPassword4.value,
  };
  window.localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

  inputEmail4.value = "";
  inputPassword4.value = "";
  inputAddress.value = "";
  inputAddress2.value = "";
  inputCity.value = "";
  inputState.value = "";
  inputZip.value = "";

  console.log(signUpData);
};

// login
const loginForm = (event) => {
  event.preventDefault();

  const loginInfo = {
    email: email.value,
    password: password.value,
  };

  window.localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

  console.log(loginInfo);
};

// handleRedirection
const handleRedirection = () => {
  const currentPath = window.location.pathname;

  if (!isLoggedIn) {
    console.log("first");
    console.log(currentPath);
    if (currentPath !== "/index.html" && currentPath !== "/") {
      window.location.replace("/index.html");
    }
  } else {
    if (currentPath === "/index.html" || currentPath === "/") {
      window.location.replace("/home.html");
    }
  }
};

handleRedirection();
