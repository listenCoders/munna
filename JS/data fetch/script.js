// Dynamic
const array = [
  {
    stName: "Munna",
    stClass: "",
    stRoll: "",
  },
];

// Static
const sports = [
  {
    spName: "Jamp",
  },
  {
    spName: "Reach",
  },
  {
    spName: "Morok Lorai",
  },
  {
    spName: "Ball throw",
  },
  {
    kisuna: "Kisuna",
    spValue: {
      spName: "Jole danga",
      extraObj: {
        player: "munna",
      },
    },
  },
];

const sportsUl = document.getElementById("sports");

sports.forEach((games) => {
  sportsUl.innerHTML += `<li class="listItm">${
    games.spName ? games.spName : games.spValue.spName
  }</li>`;
});
