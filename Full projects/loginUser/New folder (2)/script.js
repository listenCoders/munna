let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

console.log(userInfo);

const handleRedirection = () => {
  const currentPath = window.location.pathname;
  const loggedInUser = userInfo.find(user => user.isLoggedIn);

  if (!loggedInUser) {
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

  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  const user = userInfo.find(user =>
    user.username.toLowerCase() === username && user.password === password
  );

  if (user) {
    user.isLoggedIn = true;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.replace("/home.html");
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  const loggedInUser = userInfo.find(user => user.isLoggedIn);

  if (loggedInUser) {
    loggedInUser.isLoggedIn = false;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.replace("/index.html");
  }
}

// Execute redirection check on page load
handleRedirection();
