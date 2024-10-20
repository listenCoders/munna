// Sing-in
const submitBtn = document.getElementById("submitBtn");
function submitData(event) {
  event.preventDefault();
  const fastname = document.getElementById("fastname");
  const lastname = document.getElementById("lastname");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const oldUserInfo = JSON.parse(window.localStorage.getItem("userInfo")) ||[];

  const newUser = {
    fastname: fastname.valuem,
    lastname: lastname.value,
    username: username.value,
    password: password.value,
    isLoggedIn: true
  }

  console.log(oldUserInfo)


  oldUserInfo.push(newUser)
  window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo))
  window.location.replace("/")
}


// login
let userInfo = JSON.parse(window.localStorage.getItem("userInfo"))||[];
let loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"))||[];

function LogginData(event) {
    event.preventDefault()
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = userInfo.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
  );
  console.log(user)
  if (user) {
    user.isLoggedIn = true;
    localStorage.setItem("loginInfo", JSON.stringify(user));
    window.location.replace("./home.html");
  } else alert("Unmatching username and password");
}
