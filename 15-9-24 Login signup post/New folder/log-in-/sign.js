const submitbgtn = document.getElementById("submitbgtn")

function submitData(event) {
    event.preventDefault();

    const fastname = document.getElementById("fastname")
    const lastname = document.getElementById("lastname")
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const oldUserInfo = JSON.parse(window.localStorage.getItem("userInfo")) || []

    const newUser = {
        fastname: fastname.value,
        lastname: lastname.value,
        username: username.value,
        password: password.value,
        isLoggedIn: true
    }

    oldUserInfo.push(newUser)

    window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo))
    window.location.replace("./home.html")
    submitbgtn.addEventListener("click", signupData)
}

const fastname = document.getElementById("fastname").value = "";
const lastname = document.getElementById("lastname").value = "";
const username = document.getElementById("username").value = "";
const password = document.getElementById("password").value = "";

submitbgtn.addEventListener("click", signupData);