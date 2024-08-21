const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");
const button = document.getElementById("button");

// Error handelars is 
const firstName_error_handler = document.getElementById("firstName_error_handler");
const lastName_error_handler = document.getElementById("lastName_error_handler");
const phoneNumber_error_handler = document.getElementById("phoneNumber_error_handler");
const email_error_handler = document.getElementById("email_error_handler");
const address_error_handler = document.getElementById("address_error_handler");
const password_error_handler = document.getElementById("password_error_handler");


button.addEventListener("click", (event) => {
  event.preventDefault();
  if (firstName.value == "") {
    firstName_error_handler.innerHTML = `First name can't be empty`
    console.log(firstName.value)
  }


});
