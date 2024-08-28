const input = document.querySelectorAll("input")[0];
const button = document.querySelectorAll("button")[0];
const ul = document.getElementById("ul");
const loginBtn = document.getElementById("loginBtn");

button.addEventListener("click", () => {
  const value = input.value;
  localStorage.setItem("value", value);

  window.location.reload();
});

const data = localStorage.getItem("value");


if (data == "Munna") {
  loginBtn.innerHTML = "Log Out";
  loginBtn.addEventListener("click", () => {
    localStorage.removeItem("value");

    window.location.reload();
  });
}
