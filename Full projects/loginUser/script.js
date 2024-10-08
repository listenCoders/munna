let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

console.log(userInfo)

const matchingUser = userInfo.find(
  (user) => user.username.toLowerCase() === "munna" && user.password === "munna123"
);

let isLoggedIn = matchingUser && matchingUser.isLoggedIn;

const handleRedirection = () => {
  const currentPath = window.location.pathname;

  if (!isLoggedIn) {
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

  const user = userInfo.find(
    (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
  );

  if (user) {
    user.isLoggedIn = true;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.replace("/home.html");
  } else {
    alert("Invalid username or password");
  }
}

handleRedirection();

function logout() {
  const user = userInfo.find(
    (user) => user.username.toLowerCase() === "munna" && user.password === "munna123"
  );

  if (user) {
    user.isLoggedIn = false;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
  window.location.replace("/index.html");
}
