function loginuser(event) {
    const username = document.getElementById("user")
    const password = document.getElementById("pasword")
    event.preventDefault()
    console.log(username.value, password.value)
}
let userinfo = JSON.parse(localStorage.getItem("Userinfo")) ||[];
