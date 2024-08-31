const submitBtn = document.getElementById("submitBtn");

function signupData(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const fastname = document.getElementById("fastname").value;
  const lastname = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve existing users from localStorage or initialize an empty array
  const oldUserInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];

  // Create new user object
  const newUser = {
    fastname: fastname,
    lastname: lastname,
    username: username,
    password: password,
    isLoggedIn: true,
  };

  // Add the new user to the array of users
  oldUserInfo.push(newUser);

  // Save the updated array back to localStorage
  window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo));

    // Clear all input fields after submission
    document.getElementById("fastname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    window.location.replace("/home.html")

}

// Attach event listener to the submit button
submitBtn.addEventListener("click", signupData);
