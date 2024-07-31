const navUl = document.getElementById("navItem");
const popupBtn = document.getElementById("popupBtn");
const clsBtn = document.getElementById("clsBtn");
const closeBtn = document.getElementById("closeBtn");

const navArray = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Blog",
    link: "/blog.html",
  },
  {
    text: "Content",
    link: "/content.html",
  },
  {
    text: "Privacy",
    link: "/privacy.html",
  },
  {
    text: "About",
    link: "/about.html",
  },
];

for (let i = 0; i < navArray.length; i++) {
  const element = navArray[i];

  navUl.innerHTML += `<li class="nav-item">
  <a class="nav-link active" aria-current="page" href="${element.link}">${element.text}</a>
</li>`;
}

// Popup

popupBtn.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("popup").style.display = "block";

  document.getElementById("popupBtn").style.display = "none";
}

clsBtn.addEventListener("click", clsFunc);

function clsFunc() {
  document.getElementById("popup").style.display = "none";

  document.getElementById("popupBtn").style.display = "block";
}

closeBtn.addEventListener("click", clsFunc);

function clsFunc() {
  document.getElementById("popup").style.display = "none";

  document.getElementById("popupBtn").style.display = "block";
}
