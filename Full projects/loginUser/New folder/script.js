let userinfo = JSON.parse(window.localStorage.getItem("userinfo")) 

function submid(event) {
    event.preventDefault()
    const user = document.getElementById("exampleInputUser").value
    const pass = document.getElementById("exampleInputPassword1").value
    userinfo={
user:user,
pass:pass
    }
    if (user === "Sabid"&& pass === "sabid077") {
        window.localStorage.setItem("userinfo", JSON.stringify(userinfo))
    }else{
        console.log("unvalid user id and pass")
    }
}
function logout() {
    window.localStorage.removeItem("userinfo")
}