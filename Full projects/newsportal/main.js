// DOM Elements
const m_top_news = document.getElementById("m_top_news");
const sliderBody = document.getElementById("sliderBody");

// SignUp Form code
const signUpForm = document.getElementById("signUpForm");

function submitSignUp(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const singUpUserID = document.getElementById("singUpUserID").value;
  const singUpUserPass = document.getElementById("singUpUserPass").value;

  // Password validation pattern
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // Check if password matches the pattern
  if (!regularExpression.test(singUpUserPass)) {
    alert(
      "Password must be between 6-16 characters and contain at least one number and one special character."
    );
    return;
  }

  const oldUserInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];

  const userData = {
    firstName,
    lastName,
    email,
    singUpUserID,
    singUpUserPass,
    isLoggedIn: false,
    role: "user",
  };

  oldUserInfo.push(userData);

  window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo));

  // window.location.replace("/");
}

// Top news
const allPost = JSON.parse(window.localStorage.getItem("postArray")) || [];


// sliderBody
allPost.slice(0, 3).forEach((sliderPost) => {
  sliderBody.innerHTML += `
          <div class="carousel-item m_heding active" data-bs-interval="2000">
              <img
                src=${sliderPost.imageLink}
                class="d-block w-100"
                alt="..."
              />
              <div class="breking_news_title">
                <h1 class="">${sliderPost.title}</h1>
                <p class="card-text text-center">
                  ${sliderPost.description.slice(0, 200)}
                </p>
              </div>
          </div>
  `;
});


// Display top news
allPost.forEach((news, index) => {
  m_top_news.innerHTML += `
    <div class="card mb-3 m_top_news_card">
      <div class="card-body">
        <img src="${news.imageLink}" class="card-img-top" alt="..." />
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text collapsed-content" id="initDec${index}" style="max-height: 60px;">${news.description.slice(
    0,
    200
  )}...</p>
        <div class="collapse-content" id="navbarSupportedContent${index}" style="display: none;">
          <p class="card-text expanded-content">${news.description}</p>
        </div>
        <button
          class="btn btn-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent${index}"
          aria-controls="navbarSupportedContent${index}"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onclick="expandDec(${index}, this)"
        >
          Read More
        </button>
      </div>
    </div>
  `;
});

function expandDec(index, button) {
  const initDec = document.getElementById(`initDec${index}`);
  const fullDesc = document.getElementById(`navbarSupportedContent${index}`);

  const isCollapsed =
    initDec.style.maxHeight === "60px" || initDec.style.maxHeight === "";

  initDec.style.maxHeight = isCollapsed ? "0" : "60px";
  fullDesc.style.display = isCollapsed ? "block" : "none";
  button.innerText = isCollapsed ? "Read Less" : "Read More";
}
