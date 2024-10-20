// Initialize userInfo at the top to avoid reference errors
const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || [];

// DOM Elements
const m_top_news = document.getElementById("m_top_news");


// SignUp Form code
const signUpForm = document.getElementById("signUpForm");

function submitSignUp(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const userID = document.getElementById("userID").value;
  const userPass = document.getElementById("userPass").value;

  // Password validation pattern
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // Check if password matches the pattern
  if (!regularExpression.test(userPass)) {
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
    userID,
    userPass,
    isLoggedIn: false,
    role: "user",
  };

  oldUserInfo.push(userData);

  window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo));

  window.location.replace("/");
}

// Top news
const topNews = [
  {
    id: 1,
    title: "Ronaldo Score 905 Goals today",
    description:
      "Another couple of brilliant moments from Cristiano Ronaldo took centre stage, as Al-Nassr defeated Al-Orobah 3-0 in the sixth round of Saudi Pro League. Portuguese star not only found the net but also a sharp assist for his teammate Sadio Mané. This match was well indicative of the quality Ronaldo is getting closer inch by inch to that incredible 1,000 goals in his career. This Portuguese forward is still breaking records and captivating the entire world, as he has 905 goals under his belt.",
    image:
      "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/2467/production/_129091390_gettyimages-1325105287.jpg",
  },
  {
    id: 2,
    title: "Sōsuke Aizen",
    description:
      "Sōsuke Aizen (藍染 惣右介, Aizen Sōsuke) is the former captain of the 5th Division in the Gotei 13. He later leaves Soul Society with his followers, Gin Ichimaru and Kaname Tōsen. His lieutenant was Momo Hinamori. He formerly served as the lieutenant of the 5th Division under Shinji Hirako. After waging war against Soul Society with an army of Arrancar, Aizen was defeated by Ichigo Kurosaki and sealed away by Kisuke Urahara, and then imprisoned for his crimes.",
    image: "https://images3.alphacoders.com/131/1310203.png",
  },
];



// Display top news
topNews.forEach((news, index) => {
  m_top_news.innerHTML += `
    <div class="card mb-3 m_top_news_card">
      <div class="card-body">
        <img src="${news.image}" class="card-img-top" alt="..." />
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