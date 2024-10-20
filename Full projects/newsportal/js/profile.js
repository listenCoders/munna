const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];


const userProfileName = document.getElementById("userProfileName");
const userProfile = userInfo.find((user) => {
  return user.userID.toLowerCase() === loginInfo.userID.toLowerCase();
});

userProfileName.innerHTML = userProfile.firstName + " " + userProfile.lastName;