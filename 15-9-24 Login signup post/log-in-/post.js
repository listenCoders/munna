const mjPostTitle = document.getElementById("mjPostTitle");

const loginInfo = JSON.parse(window.localStorage.getItem("loginInfo"));

console.log(loginInfo);

const input_post_title = document.getElementById("input_post_title");
const input_post_details = document.getElementById("input_post_details");
const input_post_image = document.getElementById("input_post_image");

function postData(event) {
  event.preventDefault();

  const allPosts = JSON.parse(window.localStorage.getItem("postData")) || [];

  if (loginInfo.isLoggedIn === true) {
    //   Post data
    const postData = {
      input_post_title: input_post_title.value,
      input_post_details: input_post_details.value,
      input_post_image: input_post_image.value,
      userName: loginInfo.username,
    };

    allPosts.push(postData);

    window.localStorage.setItem("postData", JSON.stringify(allPosts));
  }

  // Close the modal after successful submission
  const modal = document.getElementById("exampleModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}
