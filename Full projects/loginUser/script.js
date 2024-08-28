let userInfo = JSON.parse(localStorage.getItem("userInfo"));

let isLoggedIn = userInfo && userInfo.isLoggedIn;

const handleRedirection = () => {
  const currentPath = window.location.pathname;

  if (
    !isLoggedIn ||
    userInfo.username.toLowerCase() !== "munna" ||
    userInfo.password !== "munna123"
  ) {
    if (currentPath !== "/index.html" && currentPath !== "/") {
      window.location.replace("/index.html");
    }
  } else {
    if (currentPath === "/index.html" || currentPath === "/") {
      window.location.replace("/home.html");
    }
  }
};

function submitData(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.toLowerCase() === "munna" && password === "munna123") {
    userInfo = {
      username: username,
      password: password,
      isLoggedIn: true,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Store user info as a JSON string

    window.location.replace("/home.html");
  } else {
    alert("Invalid username or password");
  }
}

handleRedirection();

function logout() {
  localStorage.removeItem("userInfo")
  window.location.replace("/index.html");
}
