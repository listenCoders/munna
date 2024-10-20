// Setting
const firstName_up = document.getElementById("firstName_up");
const lastName_up = document.getElementById("lastName_up");
const email_up = document.getElementById("email_up");
const userID_up = document.getElementById("userID_up");
const userPass_up = document.getElementById("userPass_up");

const user = JSON.parse(window.localStorage.getItem("userInfo")) || [];

const userID = JSON.parse(window.localStorage.getItem("loginInfo")).userID;

const loginUser = user.find((dt) => dt.userID === userID);

console.log(user, "user____");

console.log(loginUser, "loginUser_____");

firstName_up.value = loginUser.firstName;
lastName_up.value = loginUser.lastName;
email_up.value = loginUser.email;
userID_up.value = loginUser.userID;
userPass_up.value = loginUser.userPass;

const updateUser = (event) => {
  event.preventDefault();

  // Find the index of the logged-in user in the array
  const userIndex = user.findIndex((dt) => dt.userID === loginUser.userID);

  console.log(userIndex, "userIndex__=-=-");

  // Create an object with the updated user info
  const updatedInfo = {
    firstName: firstName_up.value,
    lastName: lastName_up.value,
    email: email_up.value,
    userID: userID_up.value,
    userPass: userPass_up.value,
  };

  // Update the existing user info in the array
  if (userIndex !== -1) {
    user[userIndex] = updatedInfo;

    window.location.replace("/");
  }

  // Save the updated user array back to localStorage
  window.localStorage.setItem("userInfo", JSON.stringify(user));

};
