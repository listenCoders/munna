// Get user information from localStorage
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
let loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
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

    // document.getElementById("createPost").style.display = "block";
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
      userName: loginInfo.username, // Correctly setting the username for the post
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

// Function to display posts
function displayPosts() {
  postSection.innerHTML = ""; // Clear existing posts


  if (allPostArray.length > 0) {
    allPostArray.forEach((post, index) => {
      const collapseId = `collapseExample${index + 1}`;

      postSection.innerHTML += `
          <div class="post-item post_section" data-index="${index}">
            <div>
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
            </div>

            <div class="edit_delete">
              <button id="postDeleteBtn" class="btn btn-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn btn-info"
                id="editPost"
                data-index="${index}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </div>
            <hr />
          </div>
        `;
    });

    // Show post
    if (loginInfo.role === "admin") {
      document.getElementById("createPost").style.display = "block";


      // Add delete button functionality
      const postDeleteBtns = document.querySelectorAll("#postDeleteBtn");
      postDeleteBtns.forEach((btn, index) => {

       btn.style.display = "block"

        btn.addEventListener("click", () => {
          allPostArray.splice(index, 1); // Remove the post from the array
          window.localStorage.setItem("postData", JSON.stringify(allPostArray)); // Update localStorage
          displayPosts(); // Refresh the post list
        });
      });

      // Edit functionality
      const editPostBtns = document.querySelectorAll("#editPost");
      editPostBtns.forEach((btn, index) => {
        btn.style.display = "block"


        btn.addEventListener("click", () => {
          const postToEdit = allPostArray[index]; // Get the post to edit

          // Populate the modal fields with the existing data
          document.querySelector("#input_post_title").value =
            postToEdit.input_post_title;
          document.querySelector("#input_post_details").value =
            postToEdit.input_post_details;
          document.querySelector("#input_post_image").value =
            postToEdit.input_post_image;

          // Modify the form submission to update the existing post
          document.querySelector("form").onsubmit = function (event) {
            // Get the updated data from the form
            const updatedPost = {
              input_post_title:
                document.querySelector("#input_post_title").value,
              input_post_details: document.querySelector("#input_post_details")
                .value,
              input_post_image:
                document.querySelector("#input_post_image").value,
              userName: postToEdit.userName, // Preserve the userName
            };

            // Update the post in the array
            allPostArray[index] = updatedPost;

            // Save the updated array to localStorage
            window.localStorage.setItem(
              "postData",
              JSON.stringify(allPostArray)
            );

            // Close the modal
            document.querySelector(".btn-close").click();

            // Refresh the posts
            displayPosts();
          };
        });
      });
    }
  }
}

displayPosts();
