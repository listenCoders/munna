// Get user information from localStorage
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
let loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
// Display posts for the logged-in user
const allPostArray = JSON.parse(window.localStorage.getItem("postData")) || [];

// Function to handle login data
function LogginData(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const user = userInfo.find(
    (user) =>
      user.username.toLowerCase() === username.value.toLowerCase() &&
      user.password === password.value
  );

  if (user) {
    user.isLoggedIn = true;
    localStorage.setItem("loginInfo", JSON.stringify(user));
    window.location.replace("./home.html");
  } else {
    alert("Invalid username or password");
  }
}

// Logout functionality
const logOut = document.getElementById("logOut");

logOut.addEventListener("click", () => {
  if (loginInfo) {
    loginInfo.isLoggedIn = false;
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  }

  if (loginInfo.isLoggedIn === false) {
    window.location.replace("/index.html");
  }
});

// Display logged-in user's name
const user_name = document.getElementById("user_name");

if (loginInfo && loginInfo.isLoggedIn === true) {
  user_name.innerHTML = `${loginInfo.fastname + " " + loginInfo.lastname}`;
}

// Post Section - Submitting a new post
const postSection = document.getElementById("postSection");

const input_post_title = document.getElementById("input_post_title");
const input_post_details = document.getElementById("input_post_details");
const input_post_image = document.getElementById("input_post_image");

function postData(event) {

  const allPosts = JSON.parse(window.localStorage.getItem("postData")) || [];

  if (loginInfo.isLoggedIn === true) {
    // Post data
    const postData = {
      input_post_title: input_post_title.value,
      input_post_details: input_post_details.value,
      input_post_image: input_post_image.value,
      userName: loginInfo.username,
    };

    allPosts.push(postData);
    window.localStorage.setItem("postData", JSON.stringify(allPosts));
    displayPosts(); // Refresh post list
  }

  // Close the modal after successful submission
  const modal = document.getElementById("exampleModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();

}



function displayPosts() {
  postSection.innerHTML = ''; // Clear existing posts

  const loggedInUserPosts = allPostArray.filter((posts) => {
    return loginInfo.username.toLowerCase() === posts.userName.toLowerCase();
  });

  if (loggedInUserPosts.length > 0) {
    loggedInUserPosts.forEach((post, index) => {
      const collapseId = `collapseExample${index + 1}`;

      postSection.innerHTML += `
      <div class="post-item" data-index="${index}">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${collapseId}"
          aria-expanded="false"
          aria-controls="${collapseId}"
          id="mjPostTitle"
        >
          ${post.input_post_title}
        </button>

        <div class="collapse" id="${collapseId}">
          <div class="card card-body">
            <img src="${post.input_post_image}" alt="${post.input_post_image}" />
            <p>${post.input_post_details}</p>
          </div>
        </div>

        <div class="postDelete">
          <button id="postDeleteBtn" class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </button>
        </div>

        <hr />
      </div>
      `;
    });

    // Add delete button functionality
    const postDeleteBtns = document.querySelectorAll('#postDeleteBtn');
    postDeleteBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        allPostArray.splice(index, 1); // Remove the post from the array
        window.localStorage.setItem("postData", JSON.stringify(allPostArray)); // Update localStorage
        displayPosts(); // Refresh the post list
      });
    });
  }
}

displayPosts();
