const mainGrid = document.getElementById("mainGrid");

const aiData = [
  {
    title: "ChatGPT",
    image: "./src/image/chatgpt.webp",
    description:
      "ChatGPT, developed by OpenAI, is an advanced AI chatbot powered by models like GPT-3.5 and GPT-4o. It can generate text, answer questions, and assist with various tasks.",
    link: "#",
  },
  {
    title: "Gemini",
    image: "./src/image/gemini.webp",
    description:
      "Gemini is Google's AI chatbot, which combines language models with web information. It's useful for answering queries, providing recommendations, and more.",
    link: "#",
  },
  {
    title: "Perplexity AI",
    image: "./src/image/Perplexity AI.png",
    description:
      "Perplexity AI focuses on research and experimentation. It's a versatile chatbot that can handle complex prompts and generate creative content.",
    link: "#",
  },
  {
    title: "YouChat",
    image: "./src/image/YouChat.webp",
    description:
      "YouChat is an alternative to Copilot, offering similar features. It's designed for chat-based interactions and can assist with various tasks.",
    link: "#",
  },
];

// const arr = [
//   "string",
//   4,
//   true,
//   {
//     name: { com1: "BMW", com2: "Maruti" },
//     company: "BMW",
//     date: 2024,
//     sit: true,
//   },
// ];

// const car = {
//   name: { com1: "BMW", com2: "Maruti" },
//   company: "BMW",
//   date: 2024,
//   sit: true,
//   color: ["red", "black"]
// };

const cars = ["BMW", "Volvo", "Saab", "Ford"];

// document.getElementById

// document.getElementsByClassName

// let x = document.getElementsByClassName("navbar-brand")[0];

// document.write((x.innerHTML = ``));

// console.log("It's from ID", document.getElementById("test"));
// console.log(document.getElementsByClassName("navbar-brand")[0]);

for (let i = 0; i < aiData.length; i++) {
  const element = aiData[i];
  mainGrid.innerHTML += `<div class="col-lg-3">
          <!-- Card -->
          <div class="card">
            <img
              src="${element.image}"
              class="card-img-top p-3"
              alt="${element.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text text-truncate">${element.description}</p>
              <a href="${element.link}" class="btn btn-primary">See More →</a>
            </div>
          </div>
        </div>`;
}
