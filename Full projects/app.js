const navber = document.getElementById("navber");
const slayder = document.getElementById("slayder");
const cards = document.getElementById("cards");
// navarray
const navArray = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Contact",
    link: "./contact.tml",
  },
  {
    title: "About",
    link: "./about.html",
  },
  {
    title: "Sing Up",
    link: "/.sing.html",
  },
];
for (let i = 0; i < navArray.length; i++) {
  const element = navArray[i];
  navber.innerHTML += ` <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${element.link}">${element.title}</a>
            </li>`;
}
// Slider

const salydeArray = [
  {
    img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/159846/images/QUF2zGWzSHKxMVDwWxh6_SneakersShoesFootwear_Banner_1_.jpg",
    alt: "",
  },
  {
    img: "https://s.yimg.com/ny/api/res/1.2/fJDgp.7cgHOemI2xMGPhJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/858405c0-2694-11ec-9eae-3a66b73c0d08",
    alt: "",
  },
  {
    img: "https://templates.simplified.co/thumb/95b3d9d9-5669-4216-b8a7-6ce0d58a7eb1.jpg",
    alt: "",
  },
];
// Loop through the slider array and create slides
for (let i = 0; i < salydeArray.length; i++) {
  const element = salydeArray[i];
  const activeClass = i === 0 ? "active" : ""; // Set the first slide as active
  slayder.innerHTML += `<div class="carousel-item ${activeClass}" data-bs-interval="5000">
      <img
        src="${element.img}"
        class="d-block w-100 sliderImg"
        alt="${element.alt}"
      />
    </div>`;
}
//  card
const cardArray = [
  {
    img: "https://www.shutterstock.com/image-photo/antalya-turkey-september-12-2023-600nw-2360714585.jpg",
    title: "IPHONE 15 PRO MAX",
    dis: "This is a iteam of Apple company.",
    prise: "$850",
  },
  {
    img: "https://www.startech.com.bd/image/cache/catalog/headset/rapoo/h120/h120-3-228x228.jpg",
    title: "Headphone",
    dis: "Rapoo H120 USB Wired Headphone",
    prise: "$100",
  },
  {
    img: "https://www.shutterstock.com/image-vector/black-smart-watch-isolated-on-260nw-267926708.jpg",
    title: "Iwatch",
    dis: "This is a iteam of Apple company.",
    prise: "$500",
  },
];
for (let i = 0; i < cardArray.length; i++) {
  const element = cardArray[i];
  cards.innerHTML += `<div class="col col-sm-4" >
  <div class="card"> 
  <img src="${element.img}" class="card-img-top catdimage" alt="...">
  <div class="card-body">
  <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element.dis}</p>
  <h5>${element.prise}</h5>
  <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>        
  </div>
        </div>`;
}

// time count
const countdown = new Date("Aug 25, 2024 15:55:55").getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const dentence = countdown - now;

  const days = Math.floor(dentence / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dentence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dentence % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((dentence % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = ` 
  <div class="row"> 
        <div class="col time-box">
        <small>Days</small>
        <h5>${days}</h5>
        </div>
        <div class="col time-box">
        <small>hours</small>
        <h5>${hours}</h5>
        </div>
        <div class="col time-box">
        <small>minutes</small>
        <h5>${minutes}</h5>
        </div>
        <div class="col time-box">
        <small>Second</small>
        <h5>${sec}</h5>
        </div>
    </div>
  
  `;
  if (dentence < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
