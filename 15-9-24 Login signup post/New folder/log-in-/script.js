const submit = document.getElementById("submit");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

let loginInfo = JSON.parse(localStorage.getItem("loginInfo"));


const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

console.log(userInfo);




function LogginData(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.toLowerCase(); // Access the input field values
    const password = document.getElementById("password").value;

  // Find a matching user in the userInfo array
  const user = userInfo.find(
    (user) =>
      user.username.toLowerCase() === username &&
      user.password === password
  );

  if (user) {
    (user.isLoggedIn = true), // Set the logged-in flag to true
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo)); // Update localStorage
    window.location.replace("./home.html"); // Redirect to home page
  } else {
    alert("Invalid username or password"); // Show an error message
  }
  submit.addEventListener("click", LogginData);
}
