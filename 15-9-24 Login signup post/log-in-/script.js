let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

let loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

console.log(loginInfo);

function LogginData(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const user = userInfo.find(
    (user) =>
      user.username.toLowerCase() === username.value.toLowerCase() &&
      user.password === password.value
  );

  if (user) {
    (user.isLoggedIn = true),
      localStorage.setItem("loginInfo", JSON.stringify(user));
    window.location.replace("./home.html");
  } else {
    alert("Invalid username or password");
  }
}

// logout
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", () => {
  if (loginInfo) {
    loginInfo.isLoggedIn = false;
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  }

  if (loginInfo.isLoggedIn === false) {
    window.location.replace("/index.html");
  }
});

// user_name

const user_name = document.getElementById("user_name");

if (loginInfo && loginInfo.isLoggedIn === true) {
  user_name.innerHTML = `${loginInfo.fastname + " " + loginInfo.lastname}`;
}
